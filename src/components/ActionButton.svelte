<script lang="ts">
    export let text: string;
    export let onclick: () => void;
</script>

<button
    class="text-white cursor-pointer text-center font-semibold text-3xl rounded-3xl px-8 border-black bg-primary ButtonLink hover:bg-primary-600 border-3 border-b-8 py-2 transition-colors duration-200"
    on:click={(e) => {
        e.preventDefault();
        onclick();
    }}
>
    {text}
</button>