<script lang="ts">
import MobileHeader from "../../components/MobileHeader.svelte";
import Heading from "../../components/Heading.svelte";
import Menu from "../../components/Menu.svelte";

</script>

<div class="bg-secondary p-5 min-h-[100dvh]">
    <MobileHeader />

    <div class="w-full flex flex-col items-center gap-7 md:items-center py-10">
        <div class="w-full flex flex-col items-center md:items-center">
            <Heading text="O projektu" />
            <p class=" text-white text-md md:text-xl text-center mx-8 mb-10 tracking-wide xl:w-[50%]">
                ControlZ je interaktivní pub quiz, který vznikl v rámci projektového týdne studentů Creative Hill College. Tento projekt je určen pro všechny, kteří se rádi baví a soutěží, ať už doma, nebo v hospodě. ControlZ umožňuje hrát solo kvízy s různými otázkami na širokou škálu témat. Není potřeba tým, každý hráč se může zapojit sám.
            </p>

        </div>
        <div class="w-full flex flex-col items-center md:items-center">
            <Heading text="Jak hrát?" />
            <p class=" text-white text-md md:text-xl text-center mx-8 mb-10 tracking-wide xl:w-[50%]">
                
            </p>
            
        </div>
        <Menu />
    </div>
   
</div>