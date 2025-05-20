import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	css: {
		modules: {
			generateScopedName: (name) => `vp-${name}` // 'vp-' prefix for Viewport Playground
		}
	}
});
