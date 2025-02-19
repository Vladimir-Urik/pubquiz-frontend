import { NodeSSH } from 'node-ssh';
import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

// Configuration
const config = {
    host: '138.199.170.171',
    username: 'root',
    privateKey: fs.readFileSync('./key', 'utf8'),
    privateKeyFormat: 'pkcs1',
    remoteDeploymentPath: '/root/frontend-deployment',
    serviceName: 'controlz-frontend'
};

// Create a zip file of the project
async function createProjectArchive() {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream('project.zip');
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => resolve('project.zip'));
        archive.on('error', err => reject(err));

        archive.pipe(output);

        // Add the project files to the archive, excluding specified directories
        archive.glob('**/*', {
            ignore: [
                'node_modules/**',
                '.idea/**',
                '.git/**',
                '.sveltekit/**',
                'android/**',
                'ios/**',
                'build/**',
                'project.zip',
                "key",
                "deploy.js"
            ]
        });

        archive.finalize();
    });
}

async function deploy() {
    try {
        console.log('Creating project archive...');
        const archivePath = await createProjectArchive();

        console.log('Connecting to server...');
        const ssh = new NodeSSH();
        await ssh.connect(config);

        console.log('Cleaning deployment directory...');
        await ssh.execCommand(`rm -rf ${config.remoteDeploymentPath}/*`);

        console.log('Uploading project archive...');
        await ssh.putFile(archivePath, `${config.remoteDeploymentPath}/project.zip`);

        console.log('Extracting archive and setting up project...');
        await ssh.execCommand(`cd ${config.remoteDeploymentPath} && unzip project.zip && rm project.zip`);

        console.log('Installing dependencies...');
        await ssh.execCommand('npm install', { cwd: config.remoteDeploymentPath });

        console.log('Building project...');
        await ssh.execCommand('npm run build', { cwd: config.remoteDeploymentPath });

        console.log('Restarting frontend service...');
        await ssh.execCommand(`systemctl restart ${config.serviceName}`);

        console.log('Cleaning up local archive...');
        fs.unlinkSync(archivePath);

        console.log('Deployment completed successfully!');
        ssh.dispose();
    } catch (error) {
        console.error('Deployment failed:', error);
        process.exit(1);
    }
}

deploy();