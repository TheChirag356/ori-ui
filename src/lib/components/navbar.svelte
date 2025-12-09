<script lang="ts">
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import OriLogoFull from '$lib/assets/ori.svelte';
	import { Button } from './ui/button';
	import { IconBrandGithub } from '@tabler/icons-svelte';

	let stargazersCount = $state<Number>(0);
	$effect(() => {
		fetch('https://api.github.com/repos/TheChirag356/ori-ui')
			.then((res) => res.json())
			.then((data) => data.stargazers_count)
			.then((count) => (stargazersCount = count));
	});

	import { page } from '$app/state';
	const navbarItems = [
		{ label: 'Docs', href: '/docs' },
		{ label: 'Components', href: '/components' },
		{ label: 'Blocks', href: '/blocks' }
	];
</script>

<header class="bg-background sticky top-0 z-50 w-full">
	<div class="container-wrapper 3xl:fixed:px-0 px-6">
		<div class="3xl:fixed:container h-14 flex items-center gap-2">
			<a href="/">
				<OriLogoFull class="size-7 p-0" />
			</a>
			<nav class="items-center gap-0.5 hidden lg:flex">
				{#each navbarItems as item}
					<Button
						variant="ghost"
						href={item.href}
						class={page.url.pathname === item.href ? '' : 'text-foreground/70'}>{item.label}</Button
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
