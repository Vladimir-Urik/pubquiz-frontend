<script lang="ts">
    // Exportování proměnné text pro zobrazení textu v komponentě
    export let text = ""; 
    // Exportování proměnné className s výchozími CSS třídami pro stylování nadpisu
    export let className = "uppercase font-black text-white text-4xl md:text-5xl text-center mx-8 mb-10";
    // className obsahuje nastavení pro velká písmena, tučný font, bílou barvu textu, velikost písma, zarovnání na střed a okraje
</script>

<!-- Nadpis, který používá className pro styly a zobrazuje text s náhradou znaků pro nový řádek -->
<h1 class={className}>
    <!-- Nahrazuje "\n" znak za HTML <br> pro přidání nových řádků -->
    {@html text.replace(/\\n/g, '<br>')}
</h1>
