<script lang="ts">
	import { Button, type ButtonProps } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";

	type RainbowButtonProps = ButtonProps & {
		children?: () => any;
		class?: string;
	};

	let {
		class: className = "",
		children,
		...restProps
	}: RainbowButtonProps = $props();
</script>

<Button
	class={cn(
		'rainbow-button relative cursor-pointer overflow-hidden',
		'inline-flex items-center justify-center gap-2 shrink-0',
		'px-6 py-3 rounded-lg font-medium',
		'active:scale-[0.98] transition-[transform,colors,shadow] duration-200 ease-in-out',
		className
	)}
	{...restProps}
>
	{@render children?.()}

	<!-- Rainbow border at the bottom -->
	<span class="rainbow-border"></span>
</Button>

<style>
	:global(.rainbow-button) {
		--rainbow-gradient: linear-gradient(
			90deg,
			#ff0000,
			#ff7f00,
			#ffff00,
			#00ff00,
			#0000ff,
			#4b0082,
			#9400d3,
			#ff0000
		);
	}

	.rainbow-border {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: var(--rainbow-gradient);
		background-size: 200% 100%;
		animation: rainbow-flow 2s linear infinite;
		border-radius: 0 0 0.5rem 0.5rem;
	}

	/* Glow effect underneath */
	.rainbow-border::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		height: 1px;
		background: var(--rainbow-gradient);
		background-size: 200% 100%;
		animation: rainbow-flow 2s linear infinite;
		filter: blur(8px);
		opacity: 0.7;
	}

	@keyframes rainbow-flow {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 200% 50%;
		}
	}
</style>
