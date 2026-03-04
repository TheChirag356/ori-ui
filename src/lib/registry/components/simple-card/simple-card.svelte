<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import type { Snippet } from "svelte";

	let {
		class: className,
		headingTop,
		headingBottom,
		body
	}: {
		class?: string;
		headingTop?: Snippet;
		headingBottom?: Snippet;
		body?: Snippet;
	} = $props();
</script>

<Card class={`rounded-lg border border-zinc-800/60 p-4 ${className ?? ''}`}>
	<CardContent class="p-0 flex flex-col h-full">
		<div class="text-foreground mb-0.5">
			{@render headingTop?.()}
		</div>

		<div class="grow bg-[#0e0e0f] rounded-md mb-2 relative overflow-hidden">
			{@render body?.()}
		</div>

		<div class="text-foreground/80 font-extralight text-sm w-full">
			{@render headingBottom?.()}
		</div>
	</CardContent>
</Card>
