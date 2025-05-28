<script lang="ts">
	import { enterPlayground, ViewportPlayground } from '$lib/component';
	import '../app.css';
	import Nav from './nav.svelte';

	let { children } = $props();
</script>

<ViewportPlayground>
	<header class="fixed top-0 right-0 left-0 z-9999 flex items-center justify-between bg-green-200">
		<span>header</span>
		<span>icon</span>
	</header>
	<nav class="mt-16">
		<a href="/about">About</a>
		<a href="/">Home</a>
	</nav>
	<main>
		<button onclick={enterPlayground}> dev </button>
		{@render children()}
		<Nav />
	</main>
</ViewportPlayground>
