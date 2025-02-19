<script lang="ts">
    import Container from "../../components/Container.svelte";
    import Input from "../../components/Input.svelte";
    import Button from "../../components/Button.svelte";
    import Heading from "../../components/Heading.svelte";
    import Logo from '../../components/Logo.svelte';

    let username = "";
    let password = "";
</script>

<Container>
    <Logo />
    <Heading text="Přihlášení" />
    <form action="" class="w-full">
        <div class="w-full flex flex-col items-center">
            <div class="w-[70%] md:max-w-[300px] flex flex-col gap-3 mb-5">
                <Input type="text" placeholder="Jméno" bind:value={username} />
                <Input type="password" placeholder="Heslo" bind:value={password} />
                <p class="text-white justify-end text-center">Nemáš účet? <a href="/register" class="underline decoration-2 decoration-primary underline-offset-2">Registrovat se</a></p>
            </div>
        </div>
    </form>
    <Button href="/quiz" text="Odeslat" />
</Container>