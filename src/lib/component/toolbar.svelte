<script lang="ts">
	import { Select, Button, rotateIcon, exitIcon, Input } from '$lib/ui';
	import { DEVICES, TOOLBAR_HEIGHT } from './consts';
	import { getContext } from 'svelte';
	import type { ComponentProps } from './viewport-playground.svelte';
	import type { State } from './utils.svelte';
	const viewportState = getContext<State>('viewportState');

	const {
		routes
	}: {
		routes: ComponentProps['routes'];
	} = $props();
</script>

<div class="vp-toolbar">
	<Select
		options={DEVICES.map((d) => ({
			label: `${d.name} (${d.aspect_ratio})`,
			value: d.id
		}))}
		bind:value={viewportState.deviceId}
	/>
	{#if routes}
		<Select
			options={routes.map((r) => ({
				label: r.label,
				value: r.href
			}))}
			bind:value={viewportState.iframeUrl}
		/>
	{:else}
		<Input placeholder="enter a url" dir="ltr" type="text" bind:value={viewportState.iframeUrl} />
	{/if}
	<Button
		onclick={() => {
			viewportState.orientation = viewportState.orientation === 'p' ? 'l' : 'p';
		}}
		size="icon"
	>
		{@render rotateIcon()}
	</Button>
	<Button size="icon" onclick={() => (viewportState.isActive = false)}>
		{@render exitIcon()}
	</Button>
</div>

<style>
	.vp-toolbar {
		all: initial;
		display: flex;
		height: 50px;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding-block: 0.25rem;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: #fff;
		border-bottom: 1px solid #e5e7eb;
		z-index: 1000;
		box-sizing: border-box;
		font-family: sans-serif;
	}
</style>
