<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import TypescriptIcon from '$lib/assets/icons/typescript-icon.svelte';
	import SvelteIcon from '$lib/assets/icons/svelte-icon.svelte';
	import TailwindCSSIcon from '$lib/assets/icons/tailwindcss-icon.svelte';
	import MotionIcon from '$lib/assets/icons/motion-icon.svelte';
	import ShadcnIcon from '$lib/assets/icons/shadcn-icon.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<div class="min-h-screen flex flex-col justify-between">
	<div
		class="h-dvh mx-auto font-sans max-w-3xl text-center items-center justify-center flex flex-col"
	>
		<h1 class="text-5xl font-semibold max-w-2xl">
			Animation-ready UI components for builders and designers.
		</h1>
		<p class="mt-4 mb-8 text-lg">
			Free and open-source animated components and effects built with Svelte, Typescript, Tailwind
			CSS, and Motion. Perfect companion for svelte-shadcn/ui.
		</p>
		<div class="flex">
			<Button href="/components" class="font-mono cursor-pointer">Browse Components</Button>
		</div>
		<div class="flex gap-2 text-neutral-foreground/70 mt-10">
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
</div>
