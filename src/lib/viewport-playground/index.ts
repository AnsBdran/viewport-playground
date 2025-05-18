import {viewport_dev_state} from './state.svelte.js'

export * from './state.svelte.js'
export {default as ViewportPlayground} from './Wrapper.svelte'

export const enter_dev_mode = async () => {
    viewport_dev_state.is_dev_mode = true
}
export const is_dev_mode = () => viewport_dev_state.is_dev_mode

export const exit_dev_mode = async () => {
    viewport_dev_state.is_dev_mode = false
}
