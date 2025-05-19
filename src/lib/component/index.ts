import { viewport_dev_state } from './state.svelte';
import ViewportPlayground from './viewport-playground.svelte';

const enterPlayground = async () => {
	if (self !== top) {
		alert('Already Instanciated');
		return;
	}
	viewport_dev_state.is_dev_mode = true;
};
const isPlaygroundOpen = () => viewport_dev_state.is_dev_mode;

const exitPlayground = async () => {
	viewport_dev_state.is_dev_mode = false;
};

// library exports
export { isPlaygroundOpen, exitPlayground, enterPlayground, ViewportPlayground };
export default ViewportPlayground;
