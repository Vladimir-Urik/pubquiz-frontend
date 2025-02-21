<script lang="ts">
    import type { LeaderboardEntry } from '$lib/api/types';
    import { getAvatarUrl } from '$lib/api/utils';

    export let entry: LeaderboardEntry;
    export let position: number; 


</script>

<div class="flex items-center bg-primary rounded-full p-3 shadow-md w-full mb-5">
    <div class="flex items-center justify-center w-12 h-12 bg-white text-primary font-bold rounded-full border-3 border-primary">
        #{position}
    </div>

    {#if entry.avatar}
        <img src="{getAvatarUrl(entry.avatar)}" alt="{entry.name}" class="w-10 h-10 rounded-full mx-4" />
    {:else}
        <div class="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white mx-4">
            ?
        </div>
    {/if}



    <p class="font-semibold text-lg text-white flex-grow">{entry.name}</p>
    
    <span class="text-sm text-white px-3">{entry.xp}</span>
</div>
