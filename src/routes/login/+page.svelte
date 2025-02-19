<script lang="ts">
    // Importování komponent používaných v této stránce
    import Container from "../../components/Container.svelte"; // Hlavní obalovací kontejner
    import Input from "../../components/Input.svelte"; // Vstupní pole pro formulář
    import Button from "../../components/Button.svelte"; // Tlačítko
    import Heading from "../../components/Heading.svelte"; // Nadpis
    import Logo from '../../components/Logo.svelte'; // Logo aplikace

    // Proměnné pro ukládání hodnot z formuláře
    let username = ""; // Uloží zadané jméno
    let password = ""; // Uloží zadané heslo
</script>

<Container>
    <!-- Logo aplikace -->
    <Logo />
    
    <!-- Nadpis stránky -->
    <Heading text="Přihlášení" />

    <!-- Formulář pro přihlášení -->
    <form action="" class="w-full">
        <div class="w-full flex flex-col items-center">
            <div class="w-[70%] md:max-w-[300px] flex flex-col gap-3 mb-5">
                <!-- Vstupní pole pro uživatelské jméno -->
                <Input type="text" placeholder="Jméno" bind:value={username} />
                
                <!-- Vstupní pole pro heslo -->
                <Input type="password" placeholder="Heslo" bind:value={password} />
                
                <!-- Odkaz na registraci, pokud uživatel nemá účet -->
                <p class="text-white justify-end text-center">
                    Nemáš účet? 
                    <a href="/register" class="underline decoration-2 decoration-primary underline-offset-2">
                        Registrovat se
                    </a>
                </p>
            </div>
        </div>
    </form>

    <!-- Tlačítko pro odeslání formuláře -->
    <Button href="/" text="Odeslat" />
</Container>
