<script lang="ts">
    // Import komponent použitých v této stránce
    import Button from "../components/Button.svelte";   // Tlačítko s odkazem
    import Logo from "../components/Logo.svelte";       // Logo aplikace
    import Heading from "../components/Heading.svelte"; // Nadpis
    import Container from '../components/Container.svelte'; // Kontejner pro zarovnání obsahu
</script>

<Container>
    <!-- Logo aplikace -->
    <Logo />

    <!-- Nadpis s textem (řádky jsou oddělené pomocí \n) -->
    <Heading text="how\nchronically online\nare you?" />

    <!-- Tlačítko pro přechod na stránku přihlášení -->
    <Button href="/login" text="Hrát!" />
</Container>
