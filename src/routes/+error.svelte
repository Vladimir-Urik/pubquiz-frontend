<script>
    export let error;
    let status = error?.status || 500;
</script>

<main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-12">
    <h1 class="text-5xl font-bold text-red-500">{status} - Chyba</h1>
    <p class="text-xl mt-4">{error?.message || 'Něco se pokazilo...'}</p>
    <a href="/" class="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition">
        Přejít na hlavní stránku
    </a>
</main>
