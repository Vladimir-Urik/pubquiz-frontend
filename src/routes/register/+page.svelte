<script lang="ts">
    import Container from "../../components/Container.svelte";
    import Logo from "../../components/Logo.svelte";
    import Heading from "../../components/Heading.svelte";
    import Input from "../../components/Input.svelte";

    let name = "";
    let email = "";
    let password = "";
</script>

<Container className="bg-secondary w-full h-screen flex flex-col justify-start items-center">
    <Logo />
    <Heading text="sign up" className="uppercase font-bold text-white text-4xl text-center mx-8 mb-2" />
    <form action="" class="w-full">
        <div class="w-full flex flex-col items-center">
            <div class="w-[70%] flex flex-col gap-3 mb-5">
                <Input type="text" placeholder="Jméno" bind:value={name} />
                <Input type="email" placeholder="Email" bind:value={email} />
                <Input type="password" placeholder="Heslo" bind:value={password} />
            </div>
            <Logo imgSrc="images/icespice.png" className="w-[70%]" />
        </div>
    </form>
    <button class="text-white font-semibold text-3xl bg-primary rounded-3xl w-[40%] border-white border-3 border-b-8 py-2 hover:bg-primary-600 mt-10"><a href="/" target="" rel="noopener noreferrer">Done</a></button>
</Container>