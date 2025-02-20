<script lang="ts">
    export let imgSrc = "/logo.png";
    export let altText = "";
</script>

<a href="/quizzes" aria-label="Logo">
    <img src={imgSrc} alt={altText} class="mb-10 h-14 w-auto" />
</a>