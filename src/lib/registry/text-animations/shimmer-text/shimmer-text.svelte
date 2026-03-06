<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	let {
		class: className,
		duration = 2,
		children
	}: {
		class?: string;
		duration?: number;
		children?: Snippet;
	} = $props();
</script>

<span
	class={cn(
		"inline-block bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer",
		className
	)}
	style={`animation-duration: ${duration}s;
	background-image: linear-gradient(
		110deg,
		#777 45%,
		#fff 50%,
		#777 55%
	);`}
>
	{@render children?.()}
</span>

<style>
	@keyframes shimmer {
		from {
			background-position: 200% 0;
		}
		to {
			background-position: -200% 0;
		}
	}

	.animate-shimmer {
		animation-name: shimmer;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
</style>