<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";

	let {
		children,
		class: className = "",
		hoverOnly = false,
		pulseColor = "var(--color-foreground)",
		duration = 1.5,
		...restProps
	} = $props();
</script>

<div
	class={cn(
		"relative inline-flex",
		hoverOnly && "group"
	)}
>
	<Button
		class={cn("relative z-10", className)}
		{...restProps}
	>
		{@render children?.()}
	</Button>

	<!-- Pulse ring -->
	<span
		class={cn(
			"absolute inset-0 rounded-md pointer-events-none",
			"pulse-ring",
			hoverOnly && "opacity-0 group-hover:opacity-100"
		)}
		style={`
			--pulse-color: ${pulseColor};
			--duration: ${duration}s;
		`}
	></span>
</div>

<style>
	.pulse-ring {
		background: var(--pulse-color);
		opacity: 0.25;
		transform: scale(1);
		animation: pulse var(--duration) ease-out infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
			opacity: 0.35;
		}
		70% {
			transform: scale(1.8);
			opacity: 0;
		}
		100% {
			transform: scale(1.8);
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.pulse-ring {
			animation: none;
		}
	}
</style>
