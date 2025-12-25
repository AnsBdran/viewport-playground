<script module>
	export type ComponentProps = {
		wrapper?: 'iframe' | 'div';
		children: Snippet;
		defaultOpen?: boolean;
		url?: string;
		disabled?: boolean;
		disabledOnMobile?: boolean;
		routes?: { label: string; href: string }[];
	};
</script>

<script lang="ts">
	import { onMount, type Snippet, setContext } from 'svelte';
	import { DEVICES, TOOLBAR_HEIGHT } from './consts';
	import Toolbar from './toolbar.svelte';
	import { viewportState } from './utils.svelte';
	import { MediaQuery } from 'svelte/reactivity';

	const {
		children,
		defaultOpen = false,
		wrapper = 'iframe',
		url = $bindable('/'),
		disabledOnMobile = true,
		disabled,
		routes
	}: ComponentProps = $props();

	setContext('viewportState', viewportState);
	$effect(() => {
		if (!defaultOpen) {
			viewportState.iframeUrl = url;
		}
		if (viewportState.isActive) {
			viewportState.iframeUrl = window.location.pathname;
		}
		if (disabled) {
			viewportState.isActive = false;
		}
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

	const large = new MediaQuery('min-width: 800px');

	onMount(() => {
		if (defaultOpen && top === self && large) {
			viewportState.isActive = true;
		}
	});

	$effect(() => {
		if (!large.current && disabledOnMobile) {
			viewportState.isActive = false;
		}
	});
</script>

{#if viewportState.isActive}
	<div class="vwp-root">
		<main>
			<Toolbar {routes} />
			<div class="frame-container">
				{#if wrapper === 'iframe'}
					<iframe
						src={viewportState.iframeUrl}
						{height}
						title="viewport playground"
						frameborder="0"
						class="frame"
						style="min-width: {width}px;"
						onload={handleIframeLoad}
					>
						{@render children()}
					</iframe>
				{:else}
					<div class="frame div-frame" style="min-width: {width}px; height: {height}px;">
						{@render children()}
					</div>
				{/if}
			</div>
		</main>
	</div>
{:else}
	{@render children()}
{/if}

<style>
	.vwp-root {
		all: initial;
		display: block;
		box-sizing: border-box;
		font-family: sans-serif;
	}

	.frame-container {
		height: calc(100vh - 50px);
		margin-top: 50px;
		overflow: auto;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		background: #f3f4f6;
	}

	.frame {
		overflow-y: scroll;
		overflow-x: hidden;
		margin-inline: auto;
		border-radius: 16px;
		border: 6px solid #364153;
		box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
		max-height: calc(100vh - 50px);
		background: white;
	}

	.div-frame {
		scrollbar-width: none;
		-ms-overflow-style: none;
		contain: content;
	}
</style>
