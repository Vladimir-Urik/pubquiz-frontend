<script lang="ts">
    export let href: string = "";
    export let text: string;
    export let target: string = "";
</script>

<a
    href="{href}"
    class="text-white text-center font-semibold text-3xl rounded-3xl px-8 border-white bg-primary hover:bg-primary-600 border-3 hover:border-b-3 border-b-8 py-2 transition-colors duration-200"
    {target}
    rel="noopener noreferrer"
    on:click
>
    {text}
</a>