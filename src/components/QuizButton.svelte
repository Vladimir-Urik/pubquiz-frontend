<script lang="ts">
    // Exportování proměnné 'text' pro text, který se zobrazí na tlačítku
    export let text: string; 
    // Exportování proměnné 'href' pro specifikaci odkazu (výchozí hodnota je "/")
    export let href: string = "/";
</script>

<!-- Tlačítko s odkazem uvnitř -->
<button 
    class="text-white font-semibold text-4xl bg-[#90d63a] rounded-full w-[60%] border-white border-3 border-b-15 py-2 hover:bg-[#7fc727]"
>
    <!-- Odkaz v tlačítku, který použije hodnotu proměnné 'href' pro určení cílové adresy -->
    <a {href} target="" rel="noopener noreferrer">
        {text} <!-- Zobrazuje text, který je předán jako parametr 'text' -->
    </a>
</button>
