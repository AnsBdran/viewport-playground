export const enterPlayground = () => {
	if (self !== top) return;
	viewportState.isActive = true;
};
export const exitPlayground = () => {
	viewportState.isActive = false;
};

export type State = {
	isActive: boolean;
	orientation: 'p' | 'l';
	deviceId: string;
	wrapper: 'iframe' | 'div';
	iframeUrl: string;
}

export const viewportState = $state<State>({
	isActive: false,
	orientation: 'l', // p => portrait || l => landscape
	deviceId: 'ipad-mini',
	wrapper: 'iframe',
	iframeUrl: '/'
});
