<script lang="ts">
	let { children } = $props();

	import { MetaTags } from 'svelte-meta-tags';
	import { siteConfig } from '$lib/config/site';
</script>

<MetaTags title="Ori UI - Components" description={siteConfig.description} />

{@render children?.()}
