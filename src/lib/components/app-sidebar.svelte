<script lang="ts">
	import { page } from '$app/state';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import {
		IconLayoutSidebarLeftCollapseFilled,
		IconChevronRight,
		IconNote,
		IconBrandSafari
	} from '@tabler/icons-svelte';
	import { onMount, type ComponentProps } from 'svelte';

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
			{
				title: 'Components',
				url: '/components',
				items: [
					{
						title: 'Marquee',
						url: '/components/marquee',
						badge: 'New'
					},
					{
						title: 'File Upload',
						url: '/components/file-upload'
					}
				]
			},
			{
				title: "Buttons",
				url: '/components',
				items: [
					{
						title: 'Rainbow Button',
						url: '/components/rainbow-button',
					},
					{
						title: 'Shimmer Button',
						url: '/components/shimmer-button',
					},
					{
						title: 'Slide Text Button',
						url: '/components/slide-text-button',
					},
					{
						title: 'Copy Button',
						url: '/components/copy-button',
					},
					{
						title: 'Liquid Button',
						url: '/components/liquid-button',
					},
					{
						title: 'Flip Button',
						url: '/components/flip-button',
					}
				]
			}
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
	<Sidebar.Content class="no-scrollbar bg-background mb-4 gap-0 pt-6">
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
										class="hover:text-primary text-white  active:text-primary hover:bg-transparent active:bg-transparent data-[active=true]:bg-transparent data-[active=true]:font-normal data-[active=true]:text-primary"
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
													<Badge variant="default" class="ms-auto">{subItem.badge}</Badge>
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
