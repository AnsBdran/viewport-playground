<script lang="ts">
	import { enter_dev_mode, ViewportPlayground } from '$lib/component';
	import '../app.css';
	import Nav from './nav.svelte';

	let { children } = $props();
</script>

<ViewportPlayground wrapper="div">
	<header class="fixed top-0 right-0 left-0 z-9999 flex items-center justify-between bg-green-200">
		<span>header</span>
		<span>icon</span>
	</header>
	<main class="mt-16">
		<a href="/about">About</a>
		<a href="/">Home</a>
		<button onclick={enter_dev_mode}> dev </button>
		{@render children()}
		<Nav />
	</main>
</ViewportPlayground>
