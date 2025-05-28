export const viewportState = $state<{
	isActive: boolean;
	orientation: 'p' | 'l';
	deviceId: string;
	wrapper: 'iframe' | 'div';
	iframeUrl: string;
}>({
	isActive: false,
	// self === top &&
	// !location.hostname.includes('localhost') &&
	// matchMedia('(pointer: fine)').matches,
	orientation: 'l', // p => portrait || l => landscape
	deviceId: 'ipad-mini',
	wrapper: 'iframe',
	iframeUrl: '/'
});
