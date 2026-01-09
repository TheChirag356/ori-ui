<script lang="ts">
	import '$lib/styles/app.css';
	import { ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	import { siteConfig } from "$lib/config/site";
	import { MetaTags } from "svelte-meta-tags";

	// fonts
	import '@fontsource-variable/outfit';
	import '@fontsource/bbh-sans-bartle';
	import '@fontsource-variable/space-grotesk';
	import '@fontsource-variable/geist';
	import '@fontsource-variable/bitcount-prop-single';

	let { children } = $props();
</script>

<MetaTags
	title={siteConfig.name}
	description={siteConfig.description}
	keywords={siteConfig.keywords}
	twitter={{
		cardType: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		image: siteConfig.ogImage.url,
		site: '@chiragkun',
		creator: '@chiragkun'
	}}
	additionalMetaTags={[
		{
			content: 'width=device-width, initial-scale=1',
			name: 'viewport'
		}
	]}
	additionalLinkTags={[
		{
			rel: 'icon',
			href: '/favicon.ico'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/favicon-32x32.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/favicon-16x16.png'
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/apple-touch-icon.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '192x192',
			href: '/android-chrome-192x192.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '512x512',
			href: '/android-chrome-512x512.png'
		}
	]}
/>

<ModeWatcher />
<Tooltip.Provider delayDuration={150}>
	<Navbar />
	{@render children()}
	<Footer />
</Tooltip.Provider>
