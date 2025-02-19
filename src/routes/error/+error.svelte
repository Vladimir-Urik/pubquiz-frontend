<script>
    import { onMount } from 'svelte';

    let countdown = 5;
    let interval;

    onMount(() => {
        interval = setInterval(() => {
            countdown--;
            if (countdown <= 0) {
                clearInterval(interval);
                window.location.href = '/';
            }
        }, 1000);
    });
</script>

<main class="text-center p-12">
    <h1 class="text-4xl font-bold text-red-500">404 - Stránka nenalezena</h1>
    <p class="text-lg mt-4">Omlouváme se, ale stránka, kterou hledáte, neexistuje.</p>
    <p class="text-lg mt-2">Přesměrování na hlavní stránku za {{ countdown }} sekund...</p>
    <a href="/" class="inline-block mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg">Přejít na hlavní stránku</a>
</main>