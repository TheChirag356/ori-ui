<script lang="ts" module>
    export type MorphicNavbarProps = {
        navItems?: { href: string; name: string }[];
        class?: string;
    };
</script>

<script lang="ts">
	import { cn } from "$lib/utils";

    let items = [
        { href: "#", name: "home" },
        { href: "#works", name: "works" },
        { href: "#blog", name: "blog" },
        { href: "#about", name: "about" },
    ] satisfies { href: string; name: string }[];

    let activePath = $state("#");

    function isActivePath(path: string) {
        if (path === "#" || path === "/") {
            return activePath === "#" || activePath === "/";
        }
        return activePath.startsWith(path);
    }
    let index = $state(0);
    $effect(() => {
        index = items.findIndex(item => isActivePath(item.href));
    })

    let {navItems = items, class: className = ""}: MorphicNavbarProps = $props();
</script>

<nav class={cn('mx-auto max-w-4xl px-4 py-2', className)}>
	<div class="flex items-center justify-center">
		<div class="glass flex items-center justify-between overflow-hidden rounded-xl transition-all">
			{#each Object.entries(navItems) as [indx, { href, name }], idx (name)}
				<a
					class={cn(
						'flex items-center justify-center bg-foreground p-1.5 px-4 text-sm text-background transition-all duration-300',
						activePath === href
							? 'mx-2 rounded-xl font-semibold text-sm'
							: cn(idx === index - 1 ? 'rounded-r-xl' : '', idx === index + 1 ? 'rounded-l-xl' : '')
					)}
					{href}
					onclick={() => {
						activePath = href;
					}}>{name}</a
				>
			{/each}
		</div>
	</div>
</nav>
