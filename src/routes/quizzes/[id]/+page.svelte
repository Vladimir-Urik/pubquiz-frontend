<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Menu from '../../../components/Menu.svelte';
    import SmLogo from '../../../components/smLogo.svelte';
    import { api } from '$lib/api/client';
    import { goto } from '$app/navigation';
    import Heading from '../../../components/Heading.svelte';
    import { text } from '@sveltejs/kit';

    let quiz: any = null;
    let error: string | null = null;
    let isStarting = false;

    onMount(async () => {
        try {
            const quizzes = await api.getQuizzes();
            quiz = quizzes.find(q => q.id === parseInt($page.params.id));
            if (!quiz) throw new Error('Quiz not found');
        } catch (e) {
            error = e instanceof Error ? e.message : 'Failed to load quiz';
        }
    });

    async function startQuiz() {
        if (isStarting) return;
        isStarting = true;
        try {
            await goto(`/quizzes/${quiz.id}/play`);
        } catch (e) {
            error = 'Failed to start quiz';
            isStarting = false;
        }
    }
</script>

<div class="bg-secondary p-5 h-[100dvh]">
    <SmLogo/>

    <div class="w-full flex flex-col items-center gap-7 xl:flex-row-reverse xl:justify-center xl:items-start xl:mt-40">
        <div class="w-[70%] flex flex-col items-center xl:w-[45%] xl:px-10">
            {#if error}
                <p class="text-red-500">{error}</p>
            {:else if quiz}
                <Heading text={quiz.title} />
                <div class="bg-white rounded-lg p-6 w-full shadow-lg">
                    <p class="text-gray-700 mb-4 whitespace-pre-line break-words">{quiz.description}</p>
                    <p class="text-sm text-center text-gray-500">Questions: {quiz.questions?.length || 0}</p>
                    <div class="w-full items-center justify-center flex" >
                        <button 
                            class="bg-primary mt-2 text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            on:click={startQuiz}
                            disabled={isStarting}
                        >
                            {#if isStarting}
                                Starting...
                            {:else}
                                Start Quiz
                            {/if}
                        </button>
                    </div>
                </div>
            {:else}
                <p>Loading quiz...</p>
            {/if}
        </div>
        <Menu />
    </div>
</div>