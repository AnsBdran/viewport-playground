{#if viewport_dev_state.is_dev_mode}
    <main>
        <Toolbar />
        <div
            class="flex items-center"
            style="height: calc(100vh - {TOOLBAR_HEIGHT}px); margin-top: {TOOLBAR_HEIGHT}px"
        >
            <iframe
                src="./index.html"
                {height}
                title="viewport playground"
                frameborder="0"
                class="mx-auto mt-1 rounded-2xl border-6 border-gray-700 shadow-[0_10px_35px_rgba(0,0,0,0.45)] ring-offset-8 ring-offset-transparent dark:border-gray-400"
                style="max-height: calc(100vh - {TOOLBAR_HEIGHT}px); min-width: {width}px; scrollbar-width: none; -ms-overflow-style: none;"
                onload={handleIframeLoad}
            >
                {@render children()}
            </iframe>
        </div>
    </main>
{:else}
    {@render children()}
{/if}

<script>
import {DEVICES} from './devices.js'
import {viewport_dev_state} from './state.svelte.js'
import Toolbar, {TOOLBAR_HEIGHT} from './Toolbar.svelte'

const {children} = $props()
const device = $derived(DEVICES.find(d => d.id === viewport_dev_state.device_id))
const width = $derived(viewport_dev_state.orientation === 'l' ? device?.height : device?.width)
const height = $derived(
    viewport_dev_state.orientation === 'p' ? device?.height : `${device?.width}px`,
)

function handleIframeLoad(event) {
    const iframe = event.target
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document

    const style = iframeDoc.createElement('style')
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
    `

    iframeDoc.head.appendChild(style)
}
</script>
