<script lang="ts">
	import Menu from '../../components/Menu.svelte';
    import QuizButton from '../../components/QuizButton.svelte';
	import SmLogo from '../../components/smLogo.svelte';
    import ApiClient from '$lib/api/client';
    import type { Quiz } from '$lib/api/types';
	import { onMount } from 'svelte';
	import MobileHeader from '../../components/MobileHeader.svelte';
	import Heading from '../../components/Heading.svelte';
	import { quizStore } from '$lib/zustand/stores/quizes';

    onMount(async () => {
        const apiClient = new ApiClient();
        const response = await apiClient.getQuizzes();
        $quizStore.setQuizes(response);
    });
</script> 

<div class="bg-secondary p-5 min-h-[100svh]">
    <MobileHeader />

    <Heading text="Quizy" />
    <div class="w-full mb-[100px] flex flex-col items-center gap-5">
        {#each $quizStore.quizes as quize}
            <QuizButton text={quize.title} href={"/quizzes/"+ quize.id} />
        {/each}
        <!--<div class="w-[60%] flex flex-col items-end"><img src="images/icespice.png" alt="Ice Spice" class="h-[90%]" /></div>-->
    </div>
    <Menu/>
</div>