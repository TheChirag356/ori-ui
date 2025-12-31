<script lang="ts">
	import { page } from '$app/state';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import {
		IconNote,
		IconBrandSafari
	} from '@tabler/icons-svelte';
	import { onMount, type ComponentProps } from 'svelte';
	import { SidebarComponentData } from '$lib/data/sidebar-component-data.generated';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

	type SidebarItem = {
		title: string;
		url: string;
		isActive?: boolean;
		badge?: string;
		icon?: any;
	};

	type SidebarSection = {
		title: string;
		url: string;
		items: SidebarItem[];
	};

	let data = $state<{ navMain: SidebarSection[] }>({
		navMain: [
			{
				title: 'Getting Started',
				url: '/docs',
				items: [
					{
						title: 'Introduction',
						url: '/docs/introduction',
						isActive: true,
						icon: IconNote
					},
					{
						title: 'Installation',
						url: '/docs/installation',
						icon: IconBrandSafari
					}
				]
			},
			...SidebarComponentData
		]
	});

	let updateIsActive = (url: string) => {
		data.navMain.forEach((item) => {
			item.items.forEach((subItem) => {
				subItem.isActive = subItem.url === url;
			});
		});
	};

	let currentPath = $state('');

	onMount(() => {
		currentPath = page.url.pathname;
		updateIsActive(currentPath);
	});

	$effect(() => {
		if (currentPath !== page.url.pathname) {
			currentPath = page.url.pathname;
			updateIsActive(currentPath);
		}
	})
</script>

<Sidebar.Root class="mt-16 h-[calc(100vh-4rem)] pr-2 pl-6" {...restProps} bind:ref>
	<Sidebar.Content class="thin-scrollbar bg-background mb-4 gap-0 pt-6">
		{#each data.navMain as item (item.title)}
			<Sidebar.Group class="p-0">
				<Sidebar.GroupLabel class="text-muted-foreground text-xs ">
					{item.title.toUpperCase()}
				</Sidebar.GroupLabel>
				<div class="mb-2">
					<Sidebar.GroupContent>
						<Sidebar.Menu class="gap-0.5">
							{#each item.items as subItem (subItem.title)}
								<Sidebar.MenuItem>
									<Sidebar.MenuButton
										isActive={subItem.isActive}
										class="hover:text-accent text-white active:text-accent hover:bg-transparent active:bg-transparent data-[active=true]:bg-transparent data-[active=true]:font-normal data-[active=true]:text-accent"
										onclick={() => {
											updateIsActive(subItem.url);
										}}
									>
										{#snippet child({ props })}
											{@const Icon = subItem.icon}
											<a href={subItem.url} {...props}>
												{#if subItem.icon}
													<Icon class="size-8" />
												{/if}
												{subItem.title}
												{#if subItem.badge}
													<Badge variant="secondary" class="ms-auto">{subItem.badge}</Badge>
												{/if}
											</a>
										{/snippet}
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							{/each}
						</Sidebar.Menu>
					</Sidebar.GroupContent>
				</div>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
</Sidebar.Root>
