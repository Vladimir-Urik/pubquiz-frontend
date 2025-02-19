<script lang="ts">
    // Import tlačítka pro výběr kategorie kvízu
    import QuizButton from '../../components/QuizButton.svelte';

    // Pole s kategoriemi kvízu (text a odkaz pro každou kategorii)
    const quizCategories = [
        { text: 'Slang', href: '/' },
        { text: 'Celebrity', href: '/' },
        { text: 'Anime', href: '/' },
        { text: 'Emoji', href: '/' }
    ];
</script>

<!-- Hlavní kontejner s pozadím -->
<div class="bg-secondary">
    <!-- Obrázek hlavičky kvízu -->
    <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XVY-C6lowF0BWYmoqrT4eRPpeaMogPLTTQ&s" 
        alt="Quiz header" 
        class="mb-10 h-25 w-auto"
    />

    <!-- Flexbox kontejner pro obsah -->
    <div class="w-full min-h-screen h-full flex flex-col items-center gap-5">
        <!-- Dynamické generování tlačítek pro kategorie -->
        {#each quizCategories as category}
            <QuizButton text={category.text} href={category.href} />
        {/each}
        
        <button class="text-primary font-semibold text-4xl bg-[#90d63a] rounded-full w-[60%] py-4">.</button>
 
        <div class="w-[60%] flex flex-col items-end">
            <img src="images/icespice.png" alt="Ice Spice" class="h-[90%]" />
        </div>
    </div>
</div>
