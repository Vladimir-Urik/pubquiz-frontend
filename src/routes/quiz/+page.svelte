<script lang="ts">
	import Menu from '../../components/Menu.svelte';
    import QuizButton from '../../components/QuizButton.svelte';
	import SmLogo from '../../components/smLogo.svelte';

    const quizCategories = [
        { text: 'Slang', href: '/' },
        { text: 'Celebrity', href: '/' },
        { text: 'Anime', href: '/' },
        { text: 'Emoji', href: '/' }
    ];
</script>

<div class="bg-secondary p-5 h-[100dvh]">
    <SmLogo/>

    <div class="w-full  flex flex-col items-center gap-5">
        {#each quizCategories as category}
            <QuizButton text={category.text} href={category.href} />
        {/each}
        
        <p class="text-primary font-semibold text-4xl bg-[#90d63a] rounded-full w-[60%] xl:w-[30%] py-4">.</p>
        
        <!--<div class="w-[60%] flex flex-col items-end"><img src="images/icespice.png" alt="Ice Spice" class="h-[90%]" /></div>-->
    <Menu/>
    </div>
</div>