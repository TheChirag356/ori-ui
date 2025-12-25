<script lang="ts" module>
    export type SplitTextProps = { tag?: string; text?: string; class?: string; delay?: number; duration?: number; ease?: string; splitType?: string; from?: object; to?: object; textAlign?: string; rootMargin?: string; loop?: boolean; onAnimationCompletion?: () => void; [key: string]: any; }
</script>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { animate } from 'animejs/animation';
	import { splitText } from 'animejs/text';
	import { stagger } from 'animejs/utils';
	import { cn } from '$lib/utils';

	let {
		tag = 'p',
		text = '',
		class: className = '',
		delay = 100,
		duration = 600,
		ease = 'easeOutExpo',
		splitType = 'chars',
		loop = false,
		onAnimationCompletion = () => {},
		...restProps
	}: SplitTextProps = $props();

	let el: HTMLElement;
	let animation: any;

	onMount(() => {
		const { chars, words } = splitText(el, {
			chars: splitType.includes('chars'),
			words: splitType.includes('words')
		});

		const targets = chars || words;
		if (!targets?.length) return;

		animation = animate(targets, {
			opacity: [0, 1],
			translateY: [40, -10, 5, -2, 0],
			delay: stagger(delay),
			duration,
			easing: ease,
			loop,
			complete: onAnimationCompletion
		});
	});

	onDestroy(() => {
		animation?.pause();
		animation = null;
	});
</script>

<svelte:element this={tag} bind:this={el} class={cn('split-text', className)} {...restProps}>
	{text}
</svelte:element>
