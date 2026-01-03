import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { sidebarGenerator } from "./plugins/sidebar-generator";
import { metaJsonGenerator } from "./plugins/meta-json-generator";

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), metaJsonGenerator(), sidebarGenerator()],
	test: {
		environment: 'happy-dom',
		setupFiles: ['@testing-library/jest-dom/vitest', './vitest.setup.ts'],
	},
	resolve: {
		conditions: process.env.TEST ? [`browser`] : undefined,
	},
	optimizeDeps: {
		exclude: ['pdfjs-dist']
	}
});
