<script lang="ts">
    import Container from "../../components/Container.svelte";
    import SmLogo from "../../components/smLogo.svelte";
    import Menu from "../../components/Menu.svelte";
    import LeaderboardItem from "../../components/LeaderboardItem.svelte";

    let leaderboard = [
        { placement: 1, username: "Username" },
        { placement: 2, username: "Username" },
        { placement: 3, username: "Username" },
        { placement: 4, username: "Username" },
        { placement: 5, username: "Username" },
        { placement: 6, username: "Username" }

    ];
</script>

<div class="bg-secondary p-5 h-[100dvh] flex flex-col items-center xl:items-start">
    <SmLogo/>
    <div class="flex flex-col items-center w-full">
    <div class="w-full flex flex-col items-center gap-7 xl:flex-row-reverse xl:justify-center xl:items-start xl:mt-10">
        <div class="flex flex-row gap-5 items-end">
            <img src="https://files.ekmcdn.com/westbridgford/images/galaxy-1st-2nd-3rd-place-medal-45mm-438295-p.jpg" alt="" class="h-20">
            <img src="https://files.ekmcdn.com/westbridgford/images/galaxy-1st-2nd-3rd-place-medal-45mm-438295-p.jpg" alt="" class="h-40">
            <img src="https://files.ekmcdn.com/westbridgford/images/galaxy-1st-2nd-3rd-place-medal-45mm-438295-p.jpg" alt="" class="h-20">

        </div>
        
    </div>
        <div class="h-[50%] bg-white w-full mt-8 rounded-3xl flex flex-col items-center xl:items-start xl:w-[60%] ">
            <div class="p-5 w-[90%] overflow-y-auto xl:px-15 xl:w-[70%]">
                {#each leaderboard as entry}
                    <LeaderboardItem 
                        placement={entry.placement}
                        username={entry.username}
                    />
                {/each}
            </div>   

        </div><Menu/></div>
</div>