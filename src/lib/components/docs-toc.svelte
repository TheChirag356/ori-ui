<script lang="ts">
	let { toc } = $props();

	function extract(item) {
		const paragraph = item.children?.find((c) => c.type === "paragraph");
		if (!paragraph) return null;

		const link = paragraph.children?.find((c) => c.type === "link");
		if (!link) return null;

		const text = link.children?.[0]?.value;
		const url = link.url;

		return { text, url };
	}
</script>

{#if toc}
	<nav class="text-sm space-y-3">
		<p class="font-semibold text-lg">On this page</p>

		<ul class="space-y-2">
			{#each toc.children as item}
			{@const entry = extract(item)}
				{#if entry}
					<li>
						<a
							href={entry.url}
							class="text-muted-foreground hover:text-foreground transition-colors"
						>
							{entry.text}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
{/if}
