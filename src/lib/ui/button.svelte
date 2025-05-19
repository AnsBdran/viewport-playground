<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	const {
		children,
		size = 'normal',
		...rest
	}: { children: any; size: 'normal' | 'icon' } & HTMLButtonAttributes = $props();
</script>

<button type="button" class:icon={size === 'icon'} class:normal={size === 'normal'} {...rest}>
	{@render children()}
</button>

<style>
	button {
		display: inline-block;
		outline: 0;
		cursor: pointer;
		text-align: center;
		border: 1px solid #babfc3;
		color: #202223;
		background: #ffffff;
		border-radius: 4px;
		font-weight: 500;
		font-size: 14px;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;
		&:hover {
			background: #f6f6f7;
			outline: 1px solid transparent;
		}
	}

	.icon {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon :global(svg) {
		width: 24px;
		height: 24px;
	}
	.normal {
		padding: 7px 16px;
		min-height: 36px;
		min-width: 36px;
	}
</style>
