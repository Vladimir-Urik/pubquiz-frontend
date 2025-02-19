<script lang="ts">
    // Importování komponent používaných v této stránce
    import Container from "../../components/Container.svelte"; // Hlavní obalovací kontejner
    import Logo from "../../components/Logo.svelte"; // Logo aplikace
    import Heading from "../../components/Heading.svelte"; // Nadpis stránky
    import Input from "../../components/Input.svelte"; // Vstupní pole pro formulář
    import Button from '../../components/Button.svelte'; // Tlačítko pro odeslání formuláře

    // Proměnné pro ukládání hodnot z formuláře
    let name = ""; // Uloží zadané jméno
    let email = ""; // Uloží zadaný email
    let password = ""; // Uloží zadané heslo
</script>

<!-- Obalovací kontejner pro rozložení stránky -->
<Container>
    <!-- Logo aplikace -->
    <Logo />
    
    <!-- Nadpis stránky -->
    <Heading text="Registrace" />

    <!-- Formulář pro registraci -->
    <form action="" class="w-full">
        <div class="w-full flex flex-col items-center">
            <div class="w-[70%] md:max-w-[300px] flex flex-col gap-3 mb-5">
                <!-- Vstupní pole pro jméno -->
                <Input type="text" placeholder="Jméno" bind:value={name} />
                
                <!-- Vstupní pole pro email -->
                <Input type="email" placeholder="Email" bind:value={email} />
                
                <!-- Vstupní pole pro heslo -->
                <Input type="password" placeholder="Heslo" bind:value={password} />
                
                <!-- Odkaz na přihlášení pro uživatele, kteří už mají účet -->
                <p class="text-white justify-end text-center">
                    Máš účet? 
                    <a href="/login" class="underline decoration-2 decoration-primary underline-offset-2">
                        Přihlásit se
                    </a>
                </p>
            </div>
        </div>
    </form>

    <!-- Tlačítko pro odeslání formuláře -->
    <Button href="/" text="Odeslat" />
</Container>
