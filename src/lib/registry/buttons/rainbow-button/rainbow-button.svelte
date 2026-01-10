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

<div class="rainbow-wrapper relative inline-block rounded-lg">
	<div class="relative overflow-x-hidden rounded-lg">
		<Button
			class={cn(
				'rainbow-button relative cursor-pointer',
				'inline-flex items-center justify-center gap-2 shrink-0',
				'px-6 py-3 rounded-lg font-medium',
				'active:scale-[0.98] transition-[transform,colors,shadow] duration-200 ease-in-out',
				className
			)}
			{...restProps}
		>
			{@render children?.()}
		</Button>

		<!-- Border -->
		<span class="rainbow-border absolute left-0 right-0 bottom-0 h-px pointer-events-none"></span>
	</div>

	<!-- Glow (not clipped vertically) -->
	<span class="rainbow-glow absolute left-0 right-0 -bottom-1 h-px pointer-events-none"></span>
</div>

<style>
:global(.rainbow-wrapper) {
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

.rainbow-border,
.rainbow-glow {
	background: var(--rainbow-gradient);
	background-size: 200% 100%;
	animation: rainbow-flow 2s linear infinite;
}

.rainbow-glow {
	filter: blur(6px);
	opacity: 0.7;
}

@keyframes rainbow-flow {
	0% { background-position: 0% 50%; }
	100% { background-position: 200% 50%; }
}
</style>
