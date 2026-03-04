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
	import SimpleCard from "$lib/registry/components/simple-card/simple-card.svelte";
	import CompareImgBlock from "$lib/components/compare-img-block.svelte";

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	})

	import { siteConfig } from "$lib/config/site";
	import { MetaTags } from "svelte-meta-tags";
	import { SidebarComponentData } from "$lib/data/sidebar-component-data.generated";

	let totalComponents = $derived.by(() => {
		return SidebarComponentData.reduce((total, section) => total + section.items.length, 0);
	});
</script>

<MetaTags
	title={siteConfig.name}
	description={siteConfig.description}
	openGraph={{
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage.url,
				width: siteConfig.ogImage.width,
				height: siteConfig.ogImage.height,
				alt: siteConfig.ogImage.alt,
				type: 'image/png'
			}
		]
	}}
/>

<main class="min-h-[85vh] w-full flex flex-col justify-between relative bg-background font-sans">
	{#if mounted}
		<div
			class="h-screen px-5 flex flex-col items-center justify-center z-10 relative mx-auto text-center"
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
				<Button href="/components" class="font-mono cursor-pointer" variant="default"
					>Browse Components</Button
				>
				<RainbowButton href="/docs" class="font-mono cursor-pointer" variant="outline"
					>Get Started</RainbowButton
				>
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

	<div
		class="flex flex-col gap-5 md:max-w-6xl w-full mx-auto min-h-[70dvh] md:min-h-[60dvh] md:px-0 px-6"
	>
		<h2 class="text-4xl font-bold text-foreground">Why Ori UI?</h2>
		<SimpleCard>
			{#snippet headingTop()}
				<h3 class="text-lg font-semibold text-foreground">Light and Dark Mode</h3>
				<p class="max-w-2xl text-base/normal text-muted-foreground">
					All Components are designed to work seamlessly in both light and dark mode.
				</p>
			{/snippet}
			{#snippet body()}
				<CompareImgBlock />
			{/snippet}
		</SimpleCard>
		<div class="flex flex-col md:flex-row gap-5">
			<SimpleCard class="h-87">
				{#snippet body()}
					<div
						class="flex flex-col absolute left-1/2 top-1/2 -translate-x-1/2 justify-center items-center -translate-y-1/2 text-7xl font-semibold z-10 text-white text-shadow-xs"
					>
						{totalComponents}+ <span class="text-2xl -mt-2 font-normal">components</span>
					</div>
					<div
						class="absolute left-1/2 -bottom-2 w-2/3 -translate-x-1/2 h-8
						blur-3xl saturate-200
						bg-linear-to-r from-[#d87943] to-[#d8895c]
						animate-[glowFloat_2s_ease-in-out_infinite]
						[animation-delay:0s]"
					></div>

					<div
						class="absolute left-1/2 -bottom-2 w-2/3 -translate-x-1/2 h-8
						blur-2xl saturate-200
						bg-linear-to-r from-[#e29162] to-[#d8a080]
						animate-[glowFloat_2s_ease-in-out_infinite]
						[animation-delay:0.5s]"
					></div>

					<div
						class="absolute left-1/2 -bottom-2 w-1/2 -translate-x-1/2 h-12
						blur-2xl saturate-200
						bg-linear-to-r from-[#fbcb97] to-[#ffd8ae]
						animate-[glowFloat_3s_ease-in-out_infinite]
						[animation-delay:1s]"
					></div>
				{/snippet}

				{#snippet headingBottom()}
					<h3 class="text-lg font-semibold text-foreground">Diverse Library</h3>
					<p class="max-w-2xl text-base/normal text-muted-foreground">
						Create to your heart's content with a wide variety of components, from buttons and cards
						to complex interactive elements.
					</p>
				{/snippet}
			</SimpleCard>
			<SimpleCard class="h-87">
				{#snippet body()}
					<div
						class="absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-20 bg-linear-to-bl from-[#252529] to-[#101011] aspect-square bg-zinc-200 rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="#46aec5"
							stroke="currentColor"
							stroke-width="0.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="text-[#46aec5] blur-[1px] h-9 w-9"
							><path
								d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
							></path></svg
						>
					</div>
					<div
						class="absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-28 w-28 border border-zinc-800/15 rounded-full"
					></div>
					<div
						class="absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-40 w-40 border border-zinc-800/90 rounded-full motion-safe:animate-[spin_20s_linear_infinite]"
					>
						<div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_reverse]">
							<ShadcnIcon />
						</div>
						<div
							class="absolute"
							style="left: calc(51% - 43.3%); top: calc(40% + 37.5%); transform: translate(-50%, -50%)"
						>
							<SvelteIcon />
						</div>
						<div
							class="absolute"
							style="left: calc(49% + 43.3%); top: calc(40% + 37.5%); transform: translate(-50%, -50%)"
						>
							<TailwindCSSIcon />
						</div>
					</div>
					<div
						class="absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-52 w-52 border border-zinc-800/15 rounded-full"
					></div>
				{/snippet}
				{#snippet headingBottom()}
					<h3 class="text-lg font-semibold text-foreground">Made for Svelte & Sveltekit</h3>
					<p class="max-w-2xl text-base/normal text-muted-foreground">
						No more frustrating errors or issues. We are made for Svelte 5 + Tailwind 4.
					</p>
				{/snippet}
			</SimpleCard>
		</div>
	</div>
</main>

<style>
@keyframes glowFloat {
  0% {
    transform: translate(-50%, 0) scaleX(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, -8px) scaleX(2.4);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 0) scaleX(2);
    opacity: 0.7;
  }
}

@keyframes glowPulse {
  0%, 100% {
    filter: blur(60px) saturate(180%);
  }
  50% {
    filter: blur(80px) saturate(220%);
  }
}

  @keyframes vite-rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to   { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes vite-ring-pulse {
    0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.6; }
    100% { transform: translate(-50%, -50%) scale(1.9); opacity: 0; }
  }

  @keyframes vite-breathe {
    0%, 100% { box-shadow: 0 0 12px 2px rgba(255, 242, 61, 0.12); }
    50%       { box-shadow: 0 0 28px 8px rgba(255, 242, 61, 0.28); }
  }
</style>
