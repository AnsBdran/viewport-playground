<script lang="ts">
	import ViewportPlayground from '$lib/component/viewport-playground.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<ViewportPlayground>
	<a href="/about">About</a>
	<a href="/">Home</a>
	{@render children()}
</ViewportPlayground>
