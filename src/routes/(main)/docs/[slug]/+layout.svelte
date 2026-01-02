<script lang="ts">
	let { children, data } = $props();

	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title={data.meta.title}
	description={data.meta.description}
	titleTemplate="Ori UI Docs | %s"
/>

{@render children?.()}
