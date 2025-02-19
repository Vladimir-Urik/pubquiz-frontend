<script lang="ts">
    // Exportování proměnné 'type' pro definování typu vstupního pole (výchozí je 'text')
    export let type: string = "text"; 
    // Exportování proměnné 'placeholder' pro zobrazení textu v poli, když je prázdné
    export let placeholder: string;
    // Exportování proměnné 'value' pro uložení hodnoty zadané uživatelem (výchozí je prázdný řetězec)
    export let value: string = "";
</script>

<!-- Vstupní pole, které používá proměnné pro 'type', 'placeholder' a 'value' -->
<input
    {type}         
    {placeholder}  
    bind:value    
    class="bg-white border-3 border-black rounded-3xl py-2 px-4 w-full" 
/>
