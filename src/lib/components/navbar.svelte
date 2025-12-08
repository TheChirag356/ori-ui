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
</script>

<header class="bg-background sticky top-0 z-50 w-full">
	<div class="container-wrapper 3xl:fixed:px-0 px-6">
		<div class="3xl:fixed:container h-14 flex items-center gap-2">
			<Button href="/" variant="ghost" class="p-4">
				<OriLogoFull class="size-7 p-0" />
			</Button>
			<nav class="items-center gap-0.5 hidden lg:flex">
				<Button variant="ghost" href="/docs">Docs</Button>
				<Button variant="ghost" href="/components">Components</Button>
				<Button variant="ghost" href="/blocks">Blocks</Button>
				<ModeToggle />
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
