<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	const {
		children,
		size = 'normal',
		...rest
	}: { children: any; size: 'normal' | 'icon' } & HTMLButtonAttributes = $props();
</script>

<button
	type="button"
	{...rest}
	class={[
		'inline-flex items-center rounded-sm bg-gray-100  text-center text-sm font-medium text-gray-700 ring-1 ring-gray-200 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:focus:ring-gray-500',
		{
			'flex aspect-square size-9 items-center justify-center text-gray-400 [&>svg]:size-6':
				size === 'icon',
			'px-5 py-2.5': size === 'normal'
		}
	]}
>
	{@render children()}
</button>
