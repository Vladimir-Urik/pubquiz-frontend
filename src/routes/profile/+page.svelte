<script lang="ts">
  import Menu from '../../components/Menu.svelte';
  import SmLogo from '../../components/smLogo.svelte';
  import { authStore } from '$lib/zustand/stores/auth';
  import { getAvatarUrl } from '$lib/api/utils';
  import type { Avatar } from '$lib/api/types';
  import ApiClient from '$lib/api/client';
  import Heading from '../../components/Heading.svelte';
  import MobileHeader from '../../components/MobileHeader.svelte';
  import { avatarsStore } from '$lib/zustand/stores/avatars';
	import ActionButton from '../../components/ActionButton.svelte';
	import { removeToken } from '$lib/auth/storage';
	import { goto } from '$app/navigation';

  let activeAvatarIndex = $state(-1);
  $effect(() => {
    const api = new ApiClient();
    api.setAuthToken($authStore.token);
    api.getAvatars().then((data) => {
      $avatarsStore.setAvatars(data);
      activeAvatarIndex = $avatarsStore.avatars.findIndex((avatar) => avatar.id === $authStore.user?.avatar?.id);
    });
  });

  const nextAvatar = () => {
    activeAvatarIndex = (activeAvatarIndex + 1) % $avatarsStore.avatars.length;
    saveAvatar();
  };

  const prevAvatar = () => {
    activeAvatarIndex = (activeAvatarIndex - 1 + $avatarsStore.avatars.length) % $avatarsStore.avatars.length;
    saveAvatar();
  };

  const saveAvatar = () => {
      const apiClient = new ApiClient();
      apiClient.setAuthToken($authStore.token);
      apiClient.updateUser({
          avatar_id: $avatarsStore.avatars[activeAvatarIndex].id
      });
      $authStore.setUser({
          ...$authStore.user!,
          avatar: $avatarsStore.avatars[activeAvatarIndex]
      });
  }
</script>

<div class="bg-secondary p-5 min-h-[100dvh]">
    <MobileHeader />

    <Heading text="Profil" />
    <div class="w-full flex flex-col items-center gap-7 md:flex-row md:items-center">
        <div class="w-[100%] flex items-center justify-center">
            <div class="w-12 h-full flex flex-col justify-center items-center">
                <button  aria-label="Previous Avatar" onclick={(e) => {
                    e.preventDefault();
                    prevAvatar();
                }} class="w-12 cursor-pointer h-12 flex items-center justify-center rounded-full border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-primary hover:bg-primary-600 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:translate-x-[2px] hover:translate-y-[2px]">
                    <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>
            <div class="xl:w-[45%] aspect-square flex flex-col items-center justify-center px-4 w-[100%] max-w-[400px] xl:px-10">
                {#if activeAvatarIndex !== -1}
                    <img src="{getAvatarUrl($avatarsStore.avatars[activeAvatarIndex])}" alt="Ice Spice" class="w-[100%] aspect-square" />
                    {#if $authStore.user}
                        <h1 class="text-white mt-4 font-bold text-2xl">
                            {$authStore.user.name}
                        </h1>
                    {/if}
                {:else}
                    <div class="w-[100%] aspect-square bg-secondary-400 rounded-md"></div>
                {/if}
            </div>
            <div class="w-12 h-full flex flex-col justify-center items-center">
                <button  aria-label="Next Avatar" onclick={(e) => {
                    e.preventDefault();
                    nextAvatar();
                }} class="w-12 cursor-pointer h-12 flex items-center justify-center rounded-full border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-primary hover:bg-primary-600 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:translate-x-[2px] hover:translate-y-[2px]">
                    <svg class="w-6 h-6 text-black rotate-180" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="bg-white border-2 gap-2 gap-y-3 flex flex-wrap border-black p-3 justify-center w-full rounded-3xl md:mb-0">
            {#each $avatarsStore.avatars as avatar, index}
                <button class="cursor-pointer"  onclick={() => {
                    activeAvatarIndex = index;
                    saveAvatar();
                }}>
                    <img src="{getAvatarUrl(avatar)}" alt="Avatar" class:bg-primary={index == activeAvatarIndex}  class="w-[100%] hover:bg-primary rounded-full border-2 border-black max-w-[100px] aspect-square" />
                    <p class="text-sm">{avatar.name}</p>
                </button>
            {/each}
        </div>
        <Menu />
    </div>

    <div class="w-full md:flex md:justify-center mb-[100px] mt-8">
        <button
        class="text-white cursor-pointer md:w-fit text-center w-full font-semibold text-3xl rounded-3xl px-8 border-black bg-red-500 ButtonLink hover:bg-red-600 border-3 border-b-8 py-2 transition-colors duration-200"
        onclick={(e) => {
            e.preventDefault();
            removeToken();
			goto('/login');  
        }}>
            ODHLÁSIT SE
        </button>
    </div>
   
</div>