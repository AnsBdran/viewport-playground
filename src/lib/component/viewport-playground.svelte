<script lang="ts">
	import { DEVICES, TOOLBAR_HEIGHT } from './consts';
	import { viewport_dev_state } from './state.svelte';
	import Toolbar from './toolbar.svelte';

	const { children } = $props();
	const device = $derived(DEVICES.find((d) => d.id === viewport_dev_state.device_id));
	const width = $derived(viewport_dev_state.orientation === 'l' ? device?.height : device?.width);
	const height = $derived(viewport_dev_state.orientation === 'p' ? device?.height : device?.width);

	// function handleIframeLoad(event: Event) {
	// 	const iframe = event.target as HTMLIFrameElement;
	// 	const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
	// 	if (!iframeDoc) return;

	// 	const style = iframeDoc.createElement('style');
	// 	style.textContent = `
	//     ::-webkit-scrollbar {
	//         display: none !important;
	//     }
	//     * {
	//         scrollbar-width: none !important;
	//         -ms-overflow-style: none !important;
	//         cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="red" stroke="black" stroke-width="1"/></svg>') 8 8, auto;
	//     }
	//     html, body {
	//         overflow: auto !important;
	//         scrollbar-width: none !important;
	//         -ms-overflow-style: none !important;
	//     }
	// `;

	// 	iframeDoc.head.appendChild(style);
	// }
</script>

{#if viewport_dev_state.is_dev_mode}
	<main>
		<Toolbar />
		<div class="flex items-center" style=" margin-top: {TOOLBAR_HEIGHT}px">
			<div
				class="mx-auto mt-1 overflow-scroll rounded-2xl border-6 border-gray-700 shadow-[0_10px_35px_rgba(0,0,0,0.45)] ring-offset-8 ring-offset-transparent dark:border-gray-400"
				style="max-height: calc(100vh - {TOOLBAR_HEIGHT}px); width: {width}px; scrollbar-width: none; -ms-overflow-style: none; height: {height}px; contain: layout"
			>
				{@render children()}
			</div>
		</div>
	</main>
{:else}
	<div class="relative h-full w-full overflow-auto">
		{@render children()}
	</div>
{/if}
