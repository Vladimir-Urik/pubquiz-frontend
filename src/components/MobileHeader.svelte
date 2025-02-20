<script lang="ts">
    import SmLogo from "../components/smLogo.svelte";
    import { authStore } from "$lib/zustand/stores/auth";
	import { getAvatarUrl, getPercentageToNextLevel } from "$lib/api/utils";
</script>

<div class="w-full justify-between flex items-center mb-10">
    <img src={"/logo.png"} alt={"Logo"} class="h-14 w-auto" />
    <a class="bg-secondary flex items-center gap-2 border-2 border-white rounded-3xl py-2 px-6" href={"/profile"}>
        <img src={getAvatarUrl($authStore.user?.avatar)} alt={"Avatar"} class="h-12 w-12 rounded-full" />
        <div>
            <p class="text-white font-semibold">
                {$authStore.user?.name}
            </p>
            <p class="text-white text-xs">
                Level: {$authStore.user?.level}
            </p>
        </div>
    </a>
</div>