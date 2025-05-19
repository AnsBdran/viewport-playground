import { viewport_dev_state } from './state.svelte';
import ViewportPlayground from './viewport-playground.svelte';

const enter_dev_mode = async () => {
	viewport_dev_state.is_dev_mode = true;
};
const is_dev_mode = () => viewport_dev_state.is_dev_mode;

const exit_dev_mode = async () => {
	viewport_dev_state.is_dev_mode = false;
};

export { is_dev_mode, exit_dev_mode, enter_dev_mode, ViewportPlayground };
export default ViewportPlayground;
