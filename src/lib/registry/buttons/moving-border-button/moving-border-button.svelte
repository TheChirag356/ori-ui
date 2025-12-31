<script lang="ts" module>
	import { type ButtonProps } from '$lib/components/ui/button';
	export type MovingBorderButtonProps = ButtonProps & {
		borderRadius?: string;
		containerClass?: string;
		borderClass?: string;
		duration?: number;
		class?: string;
		borderColor?: string;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	let {
		class: className = '',
		children,
		borderRadius = '28',
		containerClass,
		borderClass,
		duration = 3000,
		borderColor = '#0ea5e9',
		...restProps
	}: MovingBorderButtonProps = $props();

	let containerRef: HTMLButtonElement;
	let rectRef: SVGRectElement;
	let width = $state(160);
	let height = $state(64);
	let rx = $derived(Math.min(parseFloat(borderRadius) || 28, Math.min(width, height) / 2));
	let dashOffset = $state(0);

	// Calculate the perimeter of a rounded rectangle
	let pathLength = $derived(2 * (width + height - 4 * rx) + 2 * Math.PI * rx);
	let dashArray = $derived(`${pathLength * 0.25} ${pathLength * 0.75}`);

	onMount(() => {
		const updateSize = () => {
			if (containerRef) {
				width = containerRef.offsetWidth;
				height = containerRef.offsetHeight;
			}
		};
		updateSize();

		const resizeObserver = new ResizeObserver(updateSize);
		resizeObserver.observe(containerRef);

		// Animation using requestAnimationFrame
		let startTime: number | null = null;
		let animationId: number;

		const animate = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const elapsed = timestamp - startTime;
			const progress = (elapsed % duration) / duration;
			dashOffset = -progress * pathLength;
			animationId = requestAnimationFrame(animate);
		};

		animationId = requestAnimationFrame(animate);

		return () => {
			resizeObserver.disconnect();
			cancelAnimationFrame(animationId);
		};
	});
</script>

<button
	bind:this={containerRef}
	class={cn(
		'group relative h-16 w-40 cursor-pointer overflow-hidden bg-transparent p-[2px] text-xl',
		containerClass
	)}
	style="border-radius: {rx}px;"
	{...restProps}
>
	<!-- SVG border with animated stroke -->
	<svg
		class="absolute inset-0 h-full w-full"
		viewBox="0 0 {width} {height}"
		preserveAspectRatio="none"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!-- Animated border stroke -->
		<rect
			bind:this={rectRef}
			x="1"
			y="1"
			width={width - 2}
			height={height - 2}
			rx={rx - 1}
			ry={rx - 1}
			stroke={borderColor}
			stroke-width="2"
			stroke-dasharray={dashArray}
			stroke-dashoffset={dashOffset}
			stroke-linecap="round"
			class={borderClass}
		/>
	</svg>

	<!-- Button content -->
	<div
		class={cn(
			'relative z-10 flex h-full w-full items-center justify-center border border-neutral-800 bg-neutral-900/80 text-sm text-white antialiased backdrop-blur-xl transition-colors duration-300 group-hover:bg-neutral-800/90',
			className
		)}
		style="border-radius: {rx - 2}px;"
	>
		{@render children?.()}
	</div>
</button>
