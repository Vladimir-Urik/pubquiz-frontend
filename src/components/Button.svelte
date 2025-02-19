<script lang="ts">
    // Vstupní proměnné pro komponentu
    export let href: string = "";  // Cílový odkaz
    export let text: string;  // Text odkazu
    export let target: string = "";  // Atribut target (_blank, _self atd.)
</script>

<!-- Odkazové tlačítko s dynamickými vlastnostmi -->
<a
    href="{href}"  
    class="text-white text-center font-semibold text-3xl rounded-3xl px-8 border-black bg-primary button hover:bg-primary-600 border-3 border-b-8 py-2 transition-colors duration-200"
    {target}  
    rel="noopener noreferrer" 
    on:click
>
    {text} 
</a>
