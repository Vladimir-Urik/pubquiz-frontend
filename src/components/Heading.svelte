<script lang="ts">
    export let text = "";
    export let className = "uppercase font-black text-white text-4xl md:text-5xl text-center mx-8 mb-10";
</script>

<h1 class={className}>{@html text.replace(/\\n/g, '<br>')}</h1>