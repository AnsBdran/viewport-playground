import { viewportState } from './state.svelte';
import ViewportPlayground from './viewport-playground.svelte';

const enterPlayground = async () => {
	if (self !== top) {
		alert('Already Instanciated');
		return;
	}
	viewportState.isActive = true;
};
const isPlaygroundOpen = () => viewportState.isActive;

const exitPlayground = async () => {
	viewportState.isActive = false;
};

// library exports
export { isPlaygroundOpen, exitPlayground, enterPlayground, ViewportPlayground };
export default ViewportPlayground;
