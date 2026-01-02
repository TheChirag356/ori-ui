<script lang="ts">
	import { cn } from "$lib/utils";
	import Annotation from "svelte-rough-notation";
	import type { RoughAnnotationType } from "rough-notation/lib/model";
	import { onMount } from "svelte";

	type Props = {
		action?: RoughAnnotationType;
		color?: string;
		strokeWidth?: number;
		duration?: number;
		delay?: number;
		padding?: number;
		class?: string;
		children?: import("svelte").Snippet;
	};

	let {
		action = "underline",
		color = "#ffd1dc",
		strokeWidth = 1.5,
		duration = 2000,
		delay = 1000,
		padding = 2,
		class: className = "",
		children
	}: Props = $props();

	let annotation: {
		show: () => void;
		hide: () => void;
	} | null = null;

	onMount(() => {
		const timer = setTimeout(() => {
			annotation?.show();
		}, delay);

		return () => clearTimeout(timer);
	});
</script>

<Annotation
	bind:this={annotation}
	show={false}
	type={action}
	{color}
	{strokeWidth}
	{duration}
	{padding}
	class={cn(className)}
>
	{@render children?.()}
</Annotation>
