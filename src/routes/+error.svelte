<script lang="ts">
    export let error; // Proměnná pro uchování chybové zprávy (přijímá data zvenčí)
    let status = error?.status; // Získání stavového kódu z objektu error (pokud existuje)

    // Import komponent použitých v této stránce
    import Button from "../components/Button.svelte";
    import Heading from "../components/Heading.svelte";
    import Container from '../components/Container.svelte';
</script>

<Container>
  
    <Heading text={status}Jejda /> <!-- Nadpis s chybovou zprávou -->
    <Heading text={error?.message || 'Něco se pokazilo...'} /> <!-- Nadpis s chybovou zprávou -->

   <Button href="/" text="Domů" /> <!-- Tlačítko pro návrat domů -->

</Container>
