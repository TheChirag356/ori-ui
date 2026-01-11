<script lang="ts">
	import { cn } from "$lib/utils";

	type Props = {
		src: string;
		class?: string;
		autoplay?: boolean;
		muted?: boolean;
		loop?: boolean;
		preload?: "auto" | "metadata" | "none";

		text: string;

		fontSize?: string | number;
		fontWeight?: string | number;
		textAnchor?: string;
		dominantBaseline?: string;
		fontFamily?: string;

		as?: keyof HTMLElementTagNameMap;
	};

	let {
		src,
		class: className = "",
		autoplay = true,
		muted = true,
		loop = true,
		preload = "auto",

		text,

		fontSize = 20,
		fontWeight = "bold",
		textAnchor = "middle",
		dominantBaseline = "middle",
		fontFamily = "sans-serif",

		as = "div"
	}: Props = $props();

	let svgMask = $state("");

	function updateSvgMask() {
		const responsiveFontSize =
			typeof fontSize === "number" ? `${fontSize}vw` : fontSize;

		svgMask = `
<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
	<text
		x='50%'
		y='50%'
		font-size='${responsiveFontSize}'
		font-weight='${fontWeight}'
		text-anchor='${textAnchor}'
		dominant-baseline='${dominantBaseline}'
		font-family='${fontFamily}'
		fill='white'
	>
		${text}
	</text>
</svg>`;
	}

	$effect(() => {
		updateSvgMask();
		window.addEventListener("resize", updateSvgMask);
		return () => window.removeEventListener("resize", updateSvgMask);
	});

	let dataUrlMask = $derived(`url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`);
</script>

<svelte:element this={as} class={cn("relative size-full overflow-hidden", className)}>
	<div
		class="absolute inset-0 flex items-center justify-center"
		style={` 
			mask-image: ${dataUrlMask};
			-webkit-mask-image: ${dataUrlMask};
			mask-size: contain;
			-webkit-mask-size: contain;
			mask-repeat: no-repeat;
			-webkit-mask-repeat: no-repeat;
			mask-position: center;
			-webkit-mask-position: center;
		`}
	>
		<video class="h-full w-full object-cover" {autoplay} {muted} {loop} {preload} playsinline>
			<source src={src} />
		</video>
	</div>

	<!-- SEO / a11y fallback -->
	<span class="sr-only">{text}</span>
</svelte:element>
