<script lang="ts">
	import '$lib/styles/app.css';
	import { ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

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
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<title>Ori UI</title>
	<meta
		name="description"
		content="Beautiful, professional, and customizable Svelte, TailwindCSS and Framer Motion components."
	/>

	<meta property="og:title" content="Ori UI" />
	<meta
		property="og:description"
		content="Beautiful, professional, and customizable Svelte, TailwindCSS and Framer Motion components."
	/>
	<meta property="og:image" content="/assets/ogImage.png" />
	<meta property="og:url" content="https://ori-ui.vercel.app" />
	<meta property="og:site_name" content="Ori UI" />
</svelte:head>

<ModeWatcher />
<Tooltip.Provider delayDuration={150}>
	<Navbar />
	{@render children()}
	<Footer />
</Tooltip.Provider>
