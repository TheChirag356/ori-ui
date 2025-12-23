<script lang="ts" module>
    export type MorphicNavbarProps = {
        navItems?: Record<string, { name: string }>;
        class?: string;
    };
</script>

<script lang="ts">
	import { cn } from "$lib/utils";

    const items = {
        "/": {
            name: "home",
        },
        "/works": {
            name: "works",
        },
        "/blog": {
            name: "blog",
        },
        "/about": {
            name: "about",
        },
    };

    let activePath = $state("/");

    function isActivePath(path: string) {
        if (path === "/") {
            return activePath === "/";
        }
        return activePath.startsWith(path);
    }

    

    let {navItems = items, class: className = ""}: MorphicNavbarProps = $props();
</script>

<nav class={cn('mx-auto max-w-4xl px-4 py-2', className)}>
	<div class="flex items-center justify-center">
		<div class="glass flex items-center justify-between overflow-hidden rounded-xl">
			{#each Object.entries(navItems) as [path, item]}
				<a
					class={cn(
						'flex items-center justify-center bg-foreground p-1.5 px-4 text-sm text-background transition-all duration-300',
						activePath === path ? 'mx-2 rounded-xl font-semibold text-sm' : cn()
					)}
					href="#"
					onclick={() => {
						activePath = path;
					}}>{item.name}</a
				>
			{/each}
		</div>
	</div>
</nav>
