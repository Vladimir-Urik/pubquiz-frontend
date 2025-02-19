<script lang="ts">
    import Container from "../../components/Container.svelte";
    import Logo from "../../components/Logo.svelte";
    import Heading from "../../components/Heading.svelte";
    import Input from "../../components/Input.svelte"
    import ActionButton from "../../components/ActionButton.svelte";
    import ApiClient from "$lib/api/client";
    import InputError from "../../components/InputError.svelte";
    import { goto } from "$app/navigation";
	import { setToken } from "$lib/auth/storage";

    let name = $state("");
    let email = $state("");
    let password = $state("");

    let nameError: undefined | string = $state(undefined);
    let emailError: undefined | string = $state(undefined);
    let passwordError: undefined | string = $state(undefined);

    function validateName() {
        if (name.length < 2) {
            nameError = "Jméno musí mít alespoň 2 znaky";
            return;
        }
        nameError = undefined;
    }

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
        validateName();
        validateEmail();
        validatePassword();

        if(nameError || emailError || passwordError) {
            return;
        }

        const apiClient = new ApiClient();
        const response = await apiClient.register({
            name: name,
            email: email,
            password: password
        });

        if(response.errors) {
            nameError = (response.errors?.name?.length || 0) > 0 ? response.errors.name![0] : undefined;
            emailError = (response.errors?.email?.length || 0) > 0 ? response.errors.email![0] : undefined;
            passwordError = (response.errors?.password?.length || 0) > 0 ? response.errors.password![0] : undefined;
            return;
        }

        if(response.access_token) {
            setToken(response.access_token);
            goto('/quizes');
        }
    }
</script>

<Container>
    <Logo />
    <Heading text="Registrace" />
    <form action="" class="w-full">
        <div class="w-full flex flex-col items-center">
            <div class="w-[70%] md:max-w-[300px] flex flex-col mb-5">
                <Input type="text" placeholder="Jméno" bind:value={name} />
                <InputError error={nameError} />
                <Input type="email" placeholder="Email" bind:value={email} />
                <InputError error={emailError} />
                <Input type="password" placeholder="Heslo" bind:value={password} />
                <InputError error={passwordError} />
                <p class="text-white justify-end text-center mt-3">Máš účet? <a href="/login" class="underline decoration-2 decoration-primary underline-offset-2">Přihlásit se</a></p>
            </div> 
        </div>
    </form>
    <ActionButton text="Odeslat" onclick={() => {
        onSubmit();
    }}/>
</Container>