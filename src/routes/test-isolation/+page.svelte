<script lang="ts">
	import ViewportPlayground from '$lib/component/viewport-playground.svelte';
	import { Demo } from '$lib/ui';
</script>

<svelte:head>
	<style>
		/* Aggressive global styles to test isolation */
		div {
			background-color: #ff0000 !important;
			color: #00ff00 !important;
			font-size: 40px !important;
			margin: 20px !important;
			padding: 20px !important;
			border: 10px solid black !important;
		}

		button {
			background-color: blue !important;
			border-radius: 50% !important;
			width: 200px !important;
		}

		select,
		input {
			background: purple !important;
			color: white !important;
		}
	</style>
</svelte:head>

<div class="parent-container">
	<h1>Isolation Test</h1>
	<p>This page has aggressive global styles that would normally break the component.</p>

	<ViewportPlayground disabled={false} defaultOpen={true}>
		<Demo />
	</ViewportPlayground>
</div>

<style>
	.parent-container {
		padding: 2rem;
	}
</style>
