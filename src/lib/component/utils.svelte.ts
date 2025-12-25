export const enterPlayground = () => {
	if (self !== top) return;
	viewportState.isActive = true;
};
export const exitPlayground = () => {
	viewportState.isActive = false;
};

export const viewportState = $state<{
	isActive: boolean;
	orientation: 'p' | 'l';
	deviceId: string;
	wrapper: 'iframe' | 'div';
	iframeUrl: string;
}>({
	isActive: false,
	orientation: 'l', // p => portrait || l => landscape
	deviceId: 'ipad-mini',
	wrapper: 'iframe',
	iframeUrl: '/'
});
