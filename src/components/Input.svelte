<script lang="ts">
    export let type: string = "text";
    export let placeholder: string;
    export let value: string = "";
</script>

<input
    {type}
    {placeholder}
    bind:value
    class="bg-white border-3 mt-3 border-black rounded-3xl py-2 px-4 w-full"
/>