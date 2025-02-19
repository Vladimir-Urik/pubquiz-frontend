<script lang="ts">
    export let text: string;
    export let href: string = "/";
</script>

<button class="text-white font-semibold text-4xl bg-[#90d63a] rounded-full w-[60%] xl:w-[30%] border-white border-3 border-b-15 py-2 hover:bg-[#7fc727]">
    <a {href} target="" rel="noopener noreferrer">{text}</a>
</button>