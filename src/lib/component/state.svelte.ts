export const viewport_dev_state = $state<{
	is_dev_mode: boolean;
	orientation: 'p' | 'l';
	device_id: string;
	wrapper: 'iframe' | 'div';
}>({
	is_dev_mode: false,
	// self === top &&
	// !location.hostname.includes('localhost') &&
	// matchMedia('(pointer: fine)').matches,
	orientation: 'l', // p => portrait || l => landscape
	device_id: 'ipad-mini',
	wrapper: 'iframe'
});
