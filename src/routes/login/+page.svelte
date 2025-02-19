<script lang="ts">
    import Container from "../../components/Container.svelte";
    import Input from "../../components/Input.svelte";
    import { goto } from '$app/navigation';
    import Heading from "../../components/Heading.svelte";
    import Logo from '../../components/Logo.svelte';
	import ActionButton from "../../components/ActionButton.svelte";
	import ApiClient from "$lib/api/client";
	import InputError from "../../components/InputError.svelte";
	import { setToken } from "$lib/auth/storage";

    let email = $state("");
    let password = $state("");

    let emailError: undefined | string = $state(undefined);
    let passwordError: undefined | string = $state(undefined);

    function validateEmail() {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError = "Email musí být ve správnem formátu!";
            return;
        }

        emailError = undefined;
    }

    function validatePassword() {
        if (password.length < 8) {
            passwordError = "Heslo musí mít alespoň 8 znaků";
            return;
        }

        if (!/[0-9]/.test(password)) {
            passwordError = "Heslo musí obsahovat alespoň jedno číslo";
            return;
        }

        passwordError = undefined;
    }

    const onSubmit = async () => {
        validateEmail();
        validatePassword();

        if(emailError || passwordError) {
            return;
        }

        const apiClient = new ApiClient();
        const response = await apiClient.login({
            email: email,
            password: password
        });

        if(response.message) {
            emailError = response.message;
            passwordError = undefined;
            return
        }

        if(response.access_token) {
            setToken(response.access_token);
            goto('/quizes');
        }
    }
</script>

<Container>
    <Logo />
    <Heading text="Přihlášení" />
    <form action="" class="w-full">
        <div class="w-full flex flex-col items-center">
            <div class="w-[70%] md:max-w-[300px] flex flex-col mb-5">
                <Input type="text" placeholder="Email" bind:value={email} />
                <InputError error={emailError} />
                <Input type="password" placeholder="Heslo" bind:value={password} />
                <InputError error={passwordError} />
                <p class="text-white justify-end text-center mt-3">Nemáš účet? <a href="/register" class="underline decoration-2 decoration-primary underline-offset-2">Registrovat se</a></p>
            </div>
        </div>
    </form>
    <ActionButton text="Odeslat" onclick={() => {
        onSubmit();
    }}/>
</Container>