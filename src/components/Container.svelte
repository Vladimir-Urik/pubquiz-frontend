<script lang="ts">
    // Exportování proměnné className s výchozí hodnotou pro nastavení tříd CSS
    export let className = "bg-secondary py-8 w-full min-h-fit h-[100dvh] flex flex-col justify-center items-center";
    // className obsahuje definice pro barvu pozadí, padding, šířku a výšku, a flexibilní rozložení
</script>

<!-- Vytváří div s dynamicky přiřazenými třídami CSS -->
<div class={className}>
    <!-- Slot pro vkládání obsahu, který bude použitý uvnitř tohoto komponentu -->
    <slot />
</div>
