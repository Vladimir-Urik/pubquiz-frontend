<script lang="ts">
	import Menu from '../../components/Menu.svelte';
    import QuizButton from '../../components/QuizButton.svelte';
	import SmLogo from '../../components/smLogo.svelte';
    import ApiClient from '$lib/api/client';
    import type { Quiz } from '$lib/api/types';
	import { onMount } from 'svelte';
	import MobileHeader from '../../components/MobileHeader.svelte';

    let quizes: Quiz[] = $state([]); 
    onMount(async () => {
        const apiClient = new ApiClient();
        const response = await apiClient.getQuizzes();
        quizes = response; 
    });
</script> 

<div class="bg-secondary p-5 h-[100dvh]">
    <MobileHeader />

    <div class="w-full  flex flex-col items-center gap-5">
        {#each quizes as quize}
            <QuizButton text={quize.title} href={"/quizzes/"+ quize.id} />
        {/each}
        <!--<div class="w-[60%] flex flex-col items-end"><img src="images/icespice.png" alt="Ice Spice" class="h-[90%]" /></div>-->
    <Menu/>
    </div>
</div>