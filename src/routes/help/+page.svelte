<script lang="ts">
import { getAvatarUrl } from '$lib/api/utils';
import { authStore } from '$lib/zustand/stores/auth';

import MobileHeader from "../../components/MobileHeader.svelte";
import Heading from "../../components/Heading.svelte";
import Menu from "../../components/Menu.svelte";

</script>

<div class="bg-secondary p-5 min-h-[100dvh]">
    <MobileHeader />

    <div class="w-full flex flex-col items-center gap-7 md:items-center pb-20">
        <div class="w-full flex flex-col items-center md:items-center">
            <Heading text="O projektu" />
            <p class=" text-white text-md md:text-xl text-center mx-8 mb-10 tracking-wide xl:w-[50%]">
               <span class="font-black">ControlZ </span> je interaktivní pub quiz, který vznikl v rámci projektového týdne studentů Creative Hill College. Tento projekt je určen pro všechny, kteří se rádi baví a soutěží, ať už doma, nebo v hospodě. ControlZ umožňuje hrát solo kvízy s různými otázkami na širokou škálu témat. Není potřeba tým, každý hráč se může zapojit sám.
            </p>
            <div class=" text-white text-md md:text-xl text-center mx-8 mb-10 tracking-wide xl:w-[50%]">
                <div class="flex flex-col gap-5 text-left">
                    <div class="flex flex-row items-center">
                        <img src="icons/home.svg" alt="" class="h-10 pr-3">
                        <p>- hlavní menu s výběrem dostupných kvízů</p>
                    </div>
                    <div class="flex flex-row">
                        <img src="icons/award.svg" alt="" class="h-10 pr-3">
                        <p>- tabulka výsledků nejvýše umístěných hráčů</p>
                    </div>       
                    <div class="flex flex-row">
                        <img src="{getAvatarUrl($authStore.user?.avatar)}" class="w-10 bg-white h-10 rounded-full border-2 border-white object-cover mr-3" alt="Profile" >                        <p></p>
                        <p>- zobrazení profilu s možností odhlášení a změny profilového obrázku</p>
                    </div> 
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col items-center md:items-center">
            <Heading text="Jak hrát?" />
            <div class=" text-white text-md md:text-xl text-center mx-8 mb-10 tracking-wide xl:w-[50%]">
                <p class="flex ">
                    Kliknutím na ikonku "Domů" se dostanete do nabídky kvízů. Kliknutím na jeden z nich spustíte hru, jejímž cílem je odpovědět na co nejvíc otázek správně, k čemuž vám slouží otázka formou videa, textu či obrázku a možnosti odpovědí. Po vyplnění kvízu se dostanete k výsledku a zvýšení bodů.
                    
                </p>
            </div>
            
        </div>
        <Menu />
    </div>
   
</div>