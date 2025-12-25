import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { mdsvexOptions } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			handleMissingId: 'ignore'
		},
		adapter: adapter()
	},
	extensions: ['.svelte', ...mdsvexOptions.extensions],
	preprocess: (vitePreprocess(), mdsvex(mdsvexOptions)),
};

export default config;
