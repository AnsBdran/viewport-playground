<script lang="ts">
	import { ViewportPlayground } from '$lib/component';
	import { Button } from '$lib/ui';
	import '../app.css';
	import Nav from './nav.svelte';
	import { getContext } from 'svelte';
	let { children } = $props();
	const viewportState = getContext('viewportState');
	console.log(viewportState);
</script>

<ViewportPlayground defaultOpen={true} defaultRoute="/onboarding">
	<header class="fixed top-0 right-0 left-0 z-9999 flex items-center justify-between bg-green-200">
		<span>header</span>
		<span>icon</span>
	</header>
	<nav class="mt-16">
		<a href="/about">About</a>
		<a href="/">Home</a>
	</nav>
	<main>
		<Button
			onclick={() => {
				viewportState.isActive = true;
			}}>enter dev mode</Button
		>
		{@render children()}
		<Nav />
	</main>
</ViewportPlayground>
