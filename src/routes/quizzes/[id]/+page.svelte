<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Menu from '../../../components/Menu.svelte';
    import SmLogo from '../../../components/smLogo.svelte';
    import { api } from '$lib/api/client';
    import { goto } from '$app/navigation';
	import type { Question, Quiz, QuizResult } from '$lib/api/types';
	import { authStore } from '$lib/zustand/stores/auth';
	import { getToken } from '$lib/auth/storage';
	import ButtonLink from '../../../components/ButtonLink.svelte';
	import { getArtUrl } from '$lib/api/utils';

    let quiz: Quiz | undefined = $state(undefined);
    let questions: Question[] = $state([]);
    let questionIndex = $state(-1);
    let quizResult: QuizResult | undefined = $state(undefined);
    let answers: {question_id: number, answer: number}[] = $state([]);
    let error: string | null = null;

    onMount(async () => {
        try {
            api.setAuthToken(getToken());
            const quizzes = await api.getQuizzes();
            quiz = quizzes.find(q => q.id === parseInt($page.params.id));
            if (!quiz) throw new Error('Quiz not found');

            questions = await api.getQuizQuestions(parseInt($page.params.id));
            questionIndex = 0;
        } catch (e) {
            error = e instanceof Error ? e.message : 'Failed to load quiz';
        }
    });
</script>

<div class="bg-secondary min-h-[100dvh]">
    <SmLogo/>

    <div class="w-full flex flex-col items-center gap-7 pb-8 xl:flex-row-reverse xl:justify-center xl:items-start">
        <div class="w-[90%] md:w-[70%] flex flex-col items-center xl:w-[45%] xl:px-10">
            {#if error}
                <p class="text-red-500">{error}</p>
            {:else if quiz}
                <p class="uppercase text-white md:text-xl text-center">{"QUIZ - "+ quiz.title} 
                    {#if questionIndex != -1}
                        {questionIndex+1}/{questions.length}
                    {/if}
                </p>
                {#if quizResult}
                    <h2 class="uppercase font-black text-white text-2xl md:text-5xl text-center mx-8 mb-10">VÝSLEDKY</h2>

                    <div class="flex flex-col w-full items-center gap-3 mt-14">
                        <h3 class="uppercase text-white font-semibold text-xl text-center">{"Tvoje skóre"}</h3>
                        <p class="text-white text-center text-xl font-semibold">{quizResult.score}/{quizResult.total_questions}</p>

                        <h3 class="uppercase text-white font-semibold text-xl text-center">{"Získané XP"}</h3>
                        <p class="text-white text-center text-xl font-semibold">{quizResult.xp_earned}XP</p>

                        <ButtonLink href="/quizzes" text="Zpět" />
                    </div>
                {/if}
                {#if questionIndex != -1 && questions.length > 0}
                    <h2 class="uppercase font-black text-white text-2xl md:text-5xl text-center mx-8 mb-10">{questions[questionIndex].text}</h2>
                    {#if questions[questionIndex].content_type === "video"}
                        <iframe width="100%" class="aspect-video" src="https://www.youtube.com/embed/{questions[questionIndex].content}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    {/if}

                    {#if questions[questionIndex].content_type === "art"}
                        <img class="w-full" src="{getArtUrl(questions[questionIndex].content)}" />
                    {/if}

                    <div class="flex flex-col w-full items-center gap-3 mt-14">
                        <h3 class="uppercase text-white font-semibold text-xl text-center">{"Vyber odpoved"}</h3>
                        {#each questions[questionIndex].answers as answer}
                            <button
                                class="text-white cursor-pointer text-center font-semibold text-xl rounded-3xl w-full md:w-[70%] px-8 border-black bg-primary ButtonLink hover:bg-primary-600 border-3 border-b-8 py-2 transition-colors duration-200"
                                onclick={(e) => {
                                    e.preventDefault();
                                    answers = [...answers, {
                                        question_id: questions[questionIndex].id,
                                        answer: answer.id
                                    }]
                                    if ((questionIndex+1) === questions.length) {
                                        api.setAuthToken($authStore.token);
                                        api.submitQuiz({
                                            quiz_id: quiz!.id,
                                            answers: answers
                                        }).then((data) => {
                                            quizResult = data;
                                            questionIndex = -1;
                                        });
                                    } else {
                                        questionIndex++;
                                    }
                                }}
                            >
                                {answer.text}
                            </button>
                        {/each}
                    </div>
                {/if}
            {:else}
                <p>Loading quiz...</p>
            {/if}
        </div>
    </div>
</div>