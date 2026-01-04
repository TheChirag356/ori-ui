<script lang="ts">
	import { cn } from "$lib/utils";
	import { IconReload } from "@tabler/icons-svelte";
	let { children, class: className } = $props();

	let reloadKey = $state(0);

	function reload() {
		reloadKey++;
	}
</script>

<div
	class={cn(
		'relative w-full min-h-56 border border-border flex justify-center items-center rounded-md p-4',
		className
	)}
>
	<!-- Reload Button -->
	<button
		type="button"
		onclick={reload}
		class="absolute top-2 cursor-pointer right-2 rounded-md border px-2 py-1 text-xs hover:bg-muted"
		aria-label="Reload preview"
		title="Reload preview"
	>
		<IconReload class="size-5" />
	</button>

	<!-- Component remount -->
	{#key reloadKey}
		{@render children?.()}
	{/key}
</div>
