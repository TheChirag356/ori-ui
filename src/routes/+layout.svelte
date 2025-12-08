<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<!-- light mode favicon -->
	<link
		rel="icon"
		type="image/svg+xml"
		href="/assets/logo/ori-light.svg"
		media="(prefers-color-scheme: light)"
	/>
	<!-- dark mode favicon -->
	<link
		rel="icon"
		type="image/svg+xml"
		href="/assets/logo/ori-dark.svg"
		media="(prefers-color-scheme: dark)"
	/>
	<!-- Fallback (optional) -->
	<link rel="icon" href="/assets/logo/ori-dark.svg" />

	<title>Ori UI</title>
	<meta
		name="description"
		content="Beautiful, professional, and customizable Svelte, TailwindCSS and Framer Motion components."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:image" content="/assets/ogImage.png" />
</svelte:head>

<ModeWatcher />
{@render children()}
