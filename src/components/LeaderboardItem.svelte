<script lang="ts">
    export let placement: number;
    export let username: string;
</script>

<div class="flex items-center bg-primary rounded-full p-3 shadow-md w-full mb-5 ">
    <div class="flex items-center justify-center w-15 h-15 bg-white text-primary font-bold rounded-full border-3 border-primary ml-[-10%]">
        {placement}
    </div>

    <p class="font-semibold text-lg text-white px-4">{username}</p>
</div>

