<script>
	import { Select, Button, rotateIcon, exitIcon, Input } from '$lib/ui';
	import { DEVICES, TOOLBAR_HEIGHT } from './consts';
	import { getContext } from 'svelte';
	const viewportState = getContext('viewportState');
</script>

<div class="fixed top-0 w-full" style="height: {TOOLBAR_HEIGHT}px;">
	<Select
		options={DEVICES.map((d) => ({
			label: `${d.name} (${d.aspect_ratio})`,
			value: d.id
		}))}
		bind:value={viewportState.deviceId}
	/>
	<Input placeholder="enter a url" dir="ltr" type="text" bind:value={viewportState.iframeUrl} />
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
	div {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding-block: 0.25rem;
	}
</style>
