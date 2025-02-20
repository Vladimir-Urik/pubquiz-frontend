<script lang="ts">
	import Field from '../../components/Field.svelte';
	import Menu from '../../components/Menu.svelte';
	import SmLogo from '../../components/smLogo.svelte';

</script>

<div class="bg-secondary p-5 h-[100dvh]">
    <SmLogo/>

    <div class="w-full flex flex-col items-center gap-7 xl:flex-row-reverse xl:justify-center xl:items-start xl:mt-40">
        <div class="w-[70%] flex flex-col items-end xl:w-[45%] xl:px-10"><img src="images/icespice.png" alt="Ice Spice" class="h-[90%]" /></div>
        <div class="w-[70%] flex flex-col gap-3 xl:w-[30%] xl:gap-8">
            
        </div> 
        <Menu />
    </div>
   
</div>