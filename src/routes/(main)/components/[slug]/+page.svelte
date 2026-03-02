<script lang="ts">
    import "$lib/styles/markdown.css";
	let { data } = $props();
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { MetaTags } from 'svelte-meta-tags';
	import Toc from "$lib/components/docs-toc.svelte";

    const Content = $derived(data?.content);
</script>

<MetaTags
	title={data.meta.title}
	description={data.meta.description}
	titleTemplate="%s | Ori UI Component"
	openGraph={{
		title: data.meta.title,
		description: data.meta.description,
		images: [
			{
				url: `/api/og?title=${encodeURIComponent(data.meta.title)}&description=${encodeURIComponent(data.meta.description)}`,
				height: 630,
				width: 1200,
				alt: data.meta.title
			}
		]
	}}
/>

<div class="md:hidden flex">
	<Sidebar.Trigger class="mt-4" />
</div>
{#key data?.meta.title}
	<div class="w-full">
		<div class="flex flex-col lg:flex-row max-w-7xl mx-auto gap-8 px-4">
			<article class="w-full lg:max-w-3xl lg:mx-auto">
				<hgroup class="mt-8">
					<h1 class="text-3xl sm:text-4xl md:text-5xl font-sans font-semibold">{data?.meta.title}</h1>
					{#if data?.meta.description}
						<p class="text-lg mb-4 mt-1 text-foreground/50 font-serif">{data?.meta.description}</p>
					{/if}
				</hgroup>
				<hr />
				<Content />
			</article>

			<!-- Right TOC -->
			<aside class="hidden xl:block min-w-46 shrink-0">
				<div class="sticky top-24">
					<Toc toc={data.toc} />
				</div>
			</aside>
		</div>
	</div>
{/key}
