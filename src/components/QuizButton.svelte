<script lang="ts">
    export let text: string;
    export let href: string = "/";
</script>

<a {href} target="" rel="noopener noreferrer" class="text-white text-center font-semibold text-4xl bg-primary rounded-full w-[60%] xl:w-[30%] border-black border-3 border-b-15 py-2 hover:bg-primary-600">
    {text}
</a>