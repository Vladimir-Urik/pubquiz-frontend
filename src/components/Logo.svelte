<script lang="ts">
    // Exportování proměnné 'imgSrc' pro specifikaci cesty k obrázku (výchozí hodnota je '/logo.svg')
    export let imgSrc = "/logo.svg"; 
    // Exportování proměnné 'altText' pro alternativní text k obrázku (výchozí hodnota je prázdný řetězec)
    export let altText = "";
</script>

<!-- Obrázek s dynamicky nastavenými atributy 'src' a 'alt' -->
<img 
    src={imgSrc}        
    alt={altText}       
    class="w-[75%] max-w-[400px] mb-14"  
/>
