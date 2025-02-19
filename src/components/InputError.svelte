<script lang="ts">
    export let error: string | undefined;
</script>

{#if error}
    <p class="text-primary text-sm text-center mb-2">{error}</p>
{/if}