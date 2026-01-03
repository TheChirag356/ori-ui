<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import TypescriptIcon from '$lib/assets/icons/typescript-icon.svelte';
	import SvelteIcon from '$lib/assets/icons/svelte-icon.svelte';
	import TailwindCSSIcon from '$lib/assets/icons/tailwindcss-icon.svelte';
	import MotionIcon from '$lib/assets/icons/motion-icon.svelte';
	import ShadcnIcon from '$lib/assets/icons/shadcn-icon.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { RainbowButton } from "$lib/registry/buttons/rainbow-button";

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	})

	import { siteConfig } from "$lib/config/site";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
	title={siteConfig.name}
	description={siteConfig.description}
/>

<div class="h-[85vh] w-full flex flex-col justify-between relative bg-background">
	{#if mounted}
		<div
			class="h-full z-10 relative mx-auto font-sans text-center items-center justify-center flex flex-col"
		>
			<h1
				class="md:text-5xl sm:text-3xl text-2xl lg:max-w-4xl md:max-w-3xl max-w-2xl font-bartle font-semibold"
				in:fly={{ y: 20, delay: 100, easing: cubicInOut }}
			>
				Animated UI components for Svelte.
			</h1>
			<p
				class="mt-4 mb-8 md:text-lg sm:text-base font-serif md:max-w-3xl sm:max-w-lg max-w-xs text-[14px] text-neutral-foreground/70"
				in:fly={{ y: 20, delay: 500, easing: cubicInOut }}
			>
				Free and open-source animated components and effects built with Svelte, Typescript, Tailwind
				CSS, and Motion. Perfect companion for svelte-shadcn/ui.
			</p>
			<div class="flex gap-6" in:fly={{ y: 20, delay: 700, easing: cubicInOut }}>
				<Button href="/components" class="font-mono cursor-pointer" variant="secondary">Browse Components</Button>
				<RainbowButton href="/docs" class="font-mono cursor-pointer" variant="outline">Get Started</RainbowButton>
			</div>
			<div
				class="flex gap-2 text-accent-foreground/70 mt-10"
				in:fly={{ y: 20, delay: 900, easing: cubicInOut }}
			>
				<Tooltip.Root>
					<Tooltip.Trigger>
						<SvelteIcon />
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Svelte</p>
					</Tooltip.Content>
				</Tooltip.Root>

				<Tooltip.Root>
					<Tooltip.Trigger>
						<TailwindCSSIcon />
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Tailwind CSS</p>
					</Tooltip.Content>
				</Tooltip.Root>

				<Tooltip.Root>
					<Tooltip.Trigger>
						<TypescriptIcon />
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Typescript</p>
					</Tooltip.Content>
				</Tooltip.Root>

				<Tooltip.Root>
					<Tooltip.Trigger>
						<MotionIcon />
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Motion</p>
					</Tooltip.Content>
				</Tooltip.Root>

				<Tooltip.Root>
					<Tooltip.Trigger>
						<ShadcnIcon />
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>svelte-shadcn/ui</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</div>
		</div>
	{/if}
</div>
