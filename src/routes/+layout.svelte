<script lang="ts">
	import '$lib/styles/app.css';
	import { ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	import { siteConfig } from "$lib/config/site";
	import {MetaTags} from "svelte-meta-tags";

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

	<MetaTags
		title={siteConfig.name}
		description={siteConfig.description}
		openGraph={{
			type: 'website',
			locale: 'en_IE',
			title: siteConfig.name,
			description: siteConfig.description,
			url: siteConfig.url,
			images: [
				{
					url: siteConfig.ogImage.url,
					height: siteConfig.ogImage.height,
					width: siteConfig.ogImage.width,
					alt: siteConfig.ogImage.alt,
					type: 'image/png'
				}
			],
			siteName: siteConfig.name
		}}
	/>
</svelte:head>

<ModeWatcher />
<Tooltip.Provider delayDuration={150}>
	<Navbar />
	{@render children()}
	<Footer />
</Tooltip.Provider>
