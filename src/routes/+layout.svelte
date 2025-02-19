<script lang="ts">
    // Import variabilního fontu "Geologica"
    import '@fontsource-variable/geologica';

    // Import hlavního CSS souboru aplikace
    import '../app.css';

    // Získání potomků (children) z vlastností komponenty
    let { children } = $props();
</script>

<!-- Vykreslení předaného obsahu (children) -->
{@render children()} 
