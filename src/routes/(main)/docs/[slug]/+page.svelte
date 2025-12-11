<script lang="ts">
	import {fade} from 'svelte/transition';
    import "$lib/styles/markdown.css";
	let { data } = $props();

    const Content = $derived(data?.content);
</script>

{#key data?.meta.title}
	<article class="max-w-3xl mx-auto" in:fade out:fade>
		<hgroup class="mt-8">
			<h1 class="text-5xl font-semibold">{data?.meta.title}</h1>
			{#if data?.meta.description}
				<p class="text-lg mb-4 mt-1 text-foreground/50 font-serif">{data?.meta.description}</p>
			{/if}
		</hgroup>
		<hr />
		<Content />
	</article>
{/key}
