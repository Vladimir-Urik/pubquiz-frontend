<script lang="ts">
    export let text = "";
    export let className = "uppercase font-bold text-white text-4xl text-center mx-8 mb-20";
</script>

<h1 class={className}>{@html text.replace(/\\n/g, '<br>')}</h1>