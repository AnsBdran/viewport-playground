<script lang="ts">
	import { page } from '$app/state';
	import { ViewportPlayground, enterPlayground, viewportState } from '$lib/component';
	import { Button } from '$lib/ui';
	import '../app.css';
	import Nav from './nav.svelte';
	let { children } = $props();

	$effect(() => {
		if (page.url.pathname) {
			viewportState.iframeUrl = page.url.pathname;
		}
	});
</script>

<ViewportPlayground
	routes={[
		{ label: 'الصفحة الرئيسية', href: '/' },
		{ label: 'عنا', href: '/about' }
	]}
	defaultOpen={true}
	url="/onboarding"
>
	<header class="fixed top-0 right-0 left-0 z-9999 flex items-center justify-between bg-green-200">
		<span>header</span>
		<span>icon</span>
	</header>
	<nav class="mt-16 flex gap-3 bg-gray-200 p-2">
		<a href="/about">About</a>
		<a href="/">Home</a>
		<a href="/onboarding">Onboarding</a>
		<a href="ms-settings:windowsupdate-optionalupdates">play</a>
	</nav>
	<main>
		<Button
			onclick={() => {
				enterPlayground();
			}}>enter dev mode</Button
		>
		{@render children()}
		<Nav />
	</main>
</ViewportPlayground>
