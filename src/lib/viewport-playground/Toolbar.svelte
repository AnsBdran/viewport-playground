<div class="fixed top-0 z-9999 w-full" style="height: {TOOLBAR_HEIGHT}px;">
    {@render content()}
</div>

{#snippet content()}
    <div class="bg-background flex h-full items-center justify-center gap-3 py-1">
        <Select
            options={DEVICES.map(d => ({
                label: `${d.name} (${d.aspect_ratio})`,
                value: d.id,
            }))}
            bind:value={viewport_dev_state.device_id}
        />
        <Button
            size="icon-sm"
            variant={viewport_dev_state.orientation === 'p' ? 'outline' : 'default'}
            onclick={() => {
                viewport_dev_state.orientation = viewport_dev_state.orientation === 'p' ? 'l' : 'p'
            }}
        >
            <RotateCwSquare />
        </Button>
        <Button size="icon-sm" onclick={exit_dev_mode} variant="destructive">
            <LogOut />
        </Button>
    </div>
{/snippet}

<script module>
export const TOOLBAR_HEIGHT = 50
</script>

<script>
import {LogOut, RotateCwSquare} from '@lucide/svelte'

import {Button, Select} from '$ui'

// const {exit} = $props()
import {DEVICES} from './devices.js'
import {exit_dev_mode} from './index.js'
import {viewport_dev_state} from './state.svelte.js'
</script>
