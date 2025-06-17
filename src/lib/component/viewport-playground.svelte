<script lang="ts">
	import { onMount, type Snippet, setContext } from 'svelte';
	import { DEVICES, TOOLBAR_HEIGHT } from './consts';
	import Toolbar from './toolbar.svelte';
	import { viewportState } from './utils.svelte';

	type Props = {
		wrapper?: 'iframe' | 'div';
		children: Snippet;
		defaultOpen?: boolean;
		defaultRoute?: string;
	};

	const {
		children,
		defaultOpen = false,
		wrapper = 'iframe',
		defaultRoute = $bindable('/')
	}: Props = $props();

	setContext('viewportState', viewportState);
	onMount(() => {
		viewportState.iframeUrl = defaultRoute;
	});

	const device = $derived(DEVICES.find((d) => d.id === viewportState.deviceId));
	const width = $derived(viewportState.orientation === 'l' ? device?.height : device?.width);
	const height = $derived(viewportState.orientation === 'p' ? device?.height : device?.width);

	function handleIframeLoad(event: Event) {
		const iframe = event.target as HTMLIFrameElement;
		const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

		if (!iframeDoc) return;

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

	onMount(() => {
		if (defaultOpen && top === self) {
			viewportState.isActive = true;
		}
	});
</script>

{#if viewportState.isActive}
	<main>
		<Toolbar />
		<div style="height: calc(100vh - {TOOLBAR_HEIGHT}px); margin-top: {TOOLBAR_HEIGHT}px">
			{#if wrapper === 'iframe'}
				<iframe
					src={viewportState.iframeUrl}
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
