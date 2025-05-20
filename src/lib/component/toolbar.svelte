<script>
	import { Select, Button, rotateIcon, exitIcon } from '$lib/ui';
	import { DEVICES, TOOLBAR_HEIGHT } from './consts';
	import { exitPlayground } from './index.js';
	import { viewport_dev_state } from './state.svelte.js';
</script>

<div class="fixed top-0 z-9999 w-full" style="height: {TOOLBAR_HEIGHT}px;">
	<div>
		<Select
			options={DEVICES.map((d) => ({
				label: `${d.name} (${d.aspect_ratio})`,
				value: d.id
			}))}
			bind:value={viewport_dev_state.device_id}
		/>
		<Button
			onclick={() => {
				viewport_dev_state.orientation = viewport_dev_state.orientation === 'p' ? 'l' : 'p';
			}}
			size="icon"
		>
			{@render rotateIcon()}
		</Button>
		<Button size="icon" onclick={exitPlayground}>
			{@render exitIcon()}
		</Button>
	</div>
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
