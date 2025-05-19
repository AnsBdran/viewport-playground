<script lang="ts">
	import type { Snippet } from 'svelte';
	import { DEVICES, TOOLBAR_HEIGHT } from './consts';
	import { viewport_dev_state } from './state.svelte.js';
	import Toolbar from './toolbar.svelte';

	type Props = {
		wrapper: 'iframe' | 'div';
		children: Snippet;
	};

	const { children, wrapper = 'iframe' }: Props = $props();

	const device = $derived(DEVICES.find((d) => d.id === viewport_dev_state.device_id));
	const width = $derived(viewport_dev_state.orientation === 'l' ? device?.height : device?.width);
	const height = $derived(viewport_dev_state.orientation === 'p' ? device?.height : device?.width);

	function handleIframeLoad(event) {
		const iframe = event.target;
		const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

		const style = iframeDoc.createElement('style');
		style.textContent = `
        ::-webkit-scrollbar {
            display: none !important;
        }
        * {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="red" stroke="black" stroke-width="1"/></svg>') 8 8, auto;
        }
        html, body {
            overflow: auto !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
        }
    `;

		iframeDoc.head.appendChild(style);
	}
</script>

{#if viewport_dev_state.is_dev_mode}
	<main>
		<Toolbar />
		<div style="height: calc(100vh - {TOOLBAR_HEIGHT}px); margin-top: {TOOLBAR_HEIGHT}px">
			{#if wrapper === 'iframe'}
				<iframe
					src="/"
					{height}
					title="viewport playground"
					frameborder="0"
					class="frame"
					style="max-height: calc(100vh - {TOOLBAR_HEIGHT}px); min-width: {width}px;"
					onload={handleIframeLoad}
				>
					{@render children()}
				</iframe>
			{:else}
				<div
					class="frame"
					style="max-height: calc(100vh - {TOOLBAR_HEIGHT}px); min-width: {width}px; scrollbar-width: none; -ms-overflow-style: none; height: {height}px; contain: content"
				>
					{@render children()}
				</div>
			{/if}
		</div>
	</main>
{:else}
	{@render children()}
{/if}

<style>
	.frame {
		overflow-y: scroll;
		overflow-x: hidden;
		margin-inline: auto;
		border-radius: 16px;
		border: 6px solid #364153;
		box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
	}
</style>
