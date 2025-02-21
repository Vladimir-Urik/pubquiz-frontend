<script lang="ts">
    import { onMount } from 'svelte';
    import { api } from '$lib/api/client';

    import Container from "../../components/Container.svelte";
    import SmLogo from "../../components/smLogo.svelte";
    import Menu from "../../components/Menu.svelte";
    import LeaderboardItem from "../../components/LeaderboardItem.svelte";
    import Heading from "../../components/Heading.svelte";
	import type { User } from '$lib/api/types';

    let leaderboard: User[] = $state([]);

    onMount(async () => {
        try {
            const data = await api.getLeaderboard();
            console.log("Fetched leaderboard:", data);
            leaderboard = [...data];
        } catch (error) {
            console.error("Failed to load leaderboard:", error);
        }
    });

</script>

<div class="bg-secondary p-5 min-h-[100dvh] flex flex-col items-center xl:items-start">
    <SmLogo/>
    <div class="flex flex-col items-center w-full"> 
        <Heading text="Leaderboard"/>
    <div class="w-full flex flex-col items-center gap-7 xl:flex-row-reverse xl:justify-center xl:items-start xl:mt-10">
        <div class="flex flex-row items-end">
            <img src="placement/ikona_2.svg" alt="" class="h-23 xl:h-30">
            <img src="placement/ikona_1.svg" alt="" class="h-50 xl:h-60">
            <img src="placement/ikona_3.svg" alt="" class="h-23 xl:h-30">

        </div>
    </div>       

        <div class="h-[50%] w-full mt-8 rounded-3xl flex flex-col items-center xl:w-[40%] ">
            <div class="p-5 w-[100%] overflow-y-auto xl:px-3 xl:w-[80%]">
                {#each leaderboard as entry,index (entry.id)}
                    <LeaderboardItem entry={entry} position={index + 1}/>
                {/each}
            </div>   

        </div><Menu/></div>
</div>