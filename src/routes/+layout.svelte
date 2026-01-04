<script lang="ts">
	import '$lib/styles/app.css';
	import { ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	import { siteConfig } from "$lib/config/site";
	import { MetaTags } from "svelte-meta-tags";

	let { children } = $props();
</script>

<!-- Favicons -->
<link
	rel="icon"
	type="image/svg+xml"
	href="/assets/logo/ori-dark.svg"
	media="(prefers-color-scheme: dark)"
/>
<link
	rel="icon"
	type="image/svg+xml"
	href="/assets/logo/ori-light.svg"
	media="(prefers-color-scheme: light)"
/>
<link rel="icon" href="/assets/logo/ori-dark.svg" />

<meta name="viewport" content="width=device-width, initial-scale=1" />

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
/>

<ModeWatcher />
<Tooltip.Provider delayDuration={150}>
	<Navbar />
	{@render children()}
	<Footer />
</Tooltip.Provider>
