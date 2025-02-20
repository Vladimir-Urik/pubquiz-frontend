<script lang="ts">
	import { goto, onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import '@fontsource-variable/geologica';
 
	import '../app.css';
	import { onMount } from 'svelte';
	import { getToken } from '$lib/auth/storage';
	let { children } = $props();

	let token: undefined | string = $state(undefined);
	onMount(() => {
		token = getToken() || undefined;
	});

	let route: string | undefined = $state(undefined);
	onMount(() => {
		route = page.route.id || undefined;
	});

	onNavigate(({ to }) => {
		route = to?.route.id || undefined;
		token = getToken() || undefined;
	});

	const toLogin = () => {
		goto('/login');
	}

	const toQuizes = () => {
		goto('/quizzes'); 
	}

	$effect(() => {
    	if(token != undefined && (route === "/login" || route === "/register")) {
			toQuizes();
		}

		if(token == undefined && (route !== "/login" && route !== "/register" && route !== "/")) {
			toLogin();
		}
	})
</script>

{#if token == undefined && (route !== "/login" && route !== "/register" && route !== "/")}
	<p></p>
{:else}
	{@render children()}  
{/if}