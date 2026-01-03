<script lang="ts">
    import "$lib/styles/markdown.css";
	let { data } = $props();
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { MetaTags } from 'svelte-meta-tags';

    const Content = $derived(data?.content);
</script>

<MetaTags
	title={data.meta.title}
	description={data.meta.description}
	titleTemplate="%s | Ori UI Component"
/>

<div class="md:hidden flex">
	<Sidebar.Trigger class="mt-4" />
</div>
{#key data?.meta.title}
	<article class="max-w-3xl mx-auto">
		<hgroup class="mt-8">
			<h1 class="text-5xl font-sans font-semibold">{data?.meta.title}</h1>
			{#if data?.meta.description}
				<p class="text-lg mb-4 mt-1 text-foreground/50 font-serif">{data?.meta.description}</p>
			{/if}
		</hgroup>
		<hr />
		<Content />
	</article>
{/key}
