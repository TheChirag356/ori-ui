<script lang="ts">
	import { onMount } from 'svelte';
	import { animate } from 'motion';

	let {
		children,
		duration = 3000,
		rx,
		ry,
		...otherProps
	}: {
		children?: import('svelte').Snippet;
		duration?: number;
		rx?: string;
		ry?: string;
		[key: string]: any;
	} = $props();

	let pathElement: SVGRectElement | undefined = $state();
	let x = $state(0);
	let y = $state(0);

	onMount(() => {
		if (!pathElement) return;

		const length = pathElement.getTotalLength();
		
		const controls = animate(0, length, {
			duration: duration / 1000,
			repeat: Infinity,
			ease: "linear",
			onUpdate: (latest) => {
				if (pathElement) {
					const point = pathElement.getPointAtLength(latest);
					x = point.x;
					y = point.y;
				}
			}
		});

		return () => controls.stop();
	});
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="none"
	class="absolute h-full w-full"
	width="100%"
	height="100%"
	{...otherProps}
>
	<rect fill="none" width="100%" height="100%" {rx} {ry} bind:this={pathElement} />
</svg>

<div
	style="position: absolute; top: 0; left: 0; display: inline-block; transform: translateX({x}px) translateY({y}px) translateX(-50%) translateY(-50%);"
>
	{@render children?.()}
</div>
