<script lang="ts">
	import { goto, onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import '@fontsource-variable/geologica';
 
	import '../app.css';
	import { onMount } from 'svelte';
	import { getToken, removeToken } from '$lib/auth/storage';
	import ApiClient from '$lib/api/client';
	import { authStore } from '$lib/zustand/stores/auth';
	let { children } = $props();

	const apiClient = new ApiClient();

	const refreshUser = () => {
		apiClient.setAuthToken($authStore.token)
		apiClient.getCurrentUser().then((data) => {
			if(data == undefined) {
				removeToken();
				toLogin();
			} else {
				$authStore.setUser(data);
			}
		})
	}

	onMount(() => {
		$authStore.setToken(getToken());
	});

	let route: string | undefined = $state(undefined);
	onMount(() => {
		route = page.route.id || undefined;
	});

	onNavigate(({ to }) => {
		route = to?.route.id || undefined;
		$authStore.setToken(getToken());
		refreshUser();
	});

	const toLogin = () => {
		goto('/login');
	}

	const toQuizes = () => {
		goto('/quizzes'); 
	}

	$effect(() => {
		if($authStore.token != undefined && (route === "/login" || route === "/register")) {
			toQuizes();
		}

		if($authStore.token == undefined && (route !== "/login" && route !== "/register" && route !== "/")) {
			toLogin();
		}
	})

	$effect(() => {
		if($authStore.token != undefined && $authStore.user == undefined) {
			refreshUser();
		}
	})
</script>

{#if $authStore.token === undefined && (route !== "/login" && route !== "/register" && route !== "/")}
	<p></p>
{:else}
	{@render children()}  
{/if}