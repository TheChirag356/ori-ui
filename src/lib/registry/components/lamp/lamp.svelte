<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	let {
		class: className,
		glowClass = "bg-accent",
		lineClass = "bg-accent",
        children,
        ...restProps
	}: {
		class?: string;
		glowClass?: string;
		lineClass?: string;
        children?: Snippet;
	} = $props();
</script>

<div
	class={cn(
		'relative flex min-h-100 flex-col items-center justify-center overflow-hidden w-full rounded-md z-0',
		className
	)}
>
	<div class="relative flex w-full flex-1 items-center justify-center isolate">
		<div
			class={cn(
				'absolute h-36 w-md -translate-y-1/2 rounded-full opacity-50 blur-3xl transition-all duration-700',
				glowClass
			)}
		></div>
		<div
			class={cn(
				'absolute h-36 w-64 -translate-y-24 rounded-full blur-2xl transition-all duration-700',
				glowClass
			)}
		></div>
		<div
			class={cn(
				'absolute h-0.5 w-120 -translate-y-28 transition-all duration-700',
				lineClass
			)}
		></div>
		<div class="absolute h-44 w-full -translate-y-50 bg-background"></div>
	</div>
	<div class="relative z-50 flex -translate-y-32 flex-col items-center px-5">
		{@render children?.()}
	</div>
</div>