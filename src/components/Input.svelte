<script lang="ts">
    export let type: string = "text";
    export let placeholder: string;
    export let value: string = "";
</script>

<input
    {type}
    {placeholder}
    bind:value
    class="bg-white border-3 border-black rounded-3xl p-2 w-full"
/>