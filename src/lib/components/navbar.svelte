<script lang="ts">
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import OriLogoFull from '$lib/assets/ori.svelte';
	import { Button } from './ui/button';
	import { IconBrandGithub } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	let stargazersCount = $state(0);
	const CACHE_KEY = 'ORI-UI-GITHUB-STARS';
	const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
	
	import { mode } from "mode-watcher";

	let theme = $state<string | undefined>("light");

	onMount(() => {
		const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
		if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
			stargazersCount = cached.stars;
		} else {
			fetch('https://api.github.com/repos/TheChirag356/ori-ui')
				.then((res) => res.json())
				.then((data) => {
					stargazersCount = data.stargazers_count;
					localStorage.setItem(
						CACHE_KEY,
						JSON.stringify({ stars: data.stargazers_count, timestamp: Date.now() })
					);
				})
				.catch(() => {
					stargazersCount = 0;
				});
		}
	})

	$effect(() => {
		theme = mode.current;
	})

	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	const navbarItems = [
		{ label: 'Docs', href: '/docs' },
		{ label: 'Components', href: '/components' },
		// { label: 'Blocks', href: '/blocks' }
	];
</script>

<header class="bg-background sticky top-0 z-50 w-full border-b border-border">
	<div class="container-wrapper 3xl:fixed:px-0 px-6">
		<div class="3xl:fixed:container h-14 flex items-center gap-2">
			<a href="/">
				{#if theme === 'dark'}
					<OriLogoFull class="size-7 p-0" />
				{:else}
					<OriLogoFull class="size-7 p-0" />
				{/if}
			</a>
			<nav class="items-center gap-0.5 flex">
				{#each navbarItems as item}
					<Button
						variant="ghost"
						href={item.href}
						class={cn(page.url.pathname === item.href ? '' : 'text-foreground/70', 'font-mono')}
						>{item.label}</Button
					>
				{/each}
			</nav>
			<div class="ms-auto flex items-center gap-2 md:flex-1 md:justify-end divide-x">
				<Button href="https://github.com/TheChirag356/ori-ui" target="_blank" variant="ghost"
					><IconBrandGithub /></Button
				>{stargazersCount}
			</div>
			<ModeToggle />
		</div>
	</div>
</header>
