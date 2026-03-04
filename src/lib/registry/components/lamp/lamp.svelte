<script lang="ts">
    import { cn } from "$lib/utils";
    let { class: className }: { class?: string } = $props();
</script>

<div class={cn("relative max-w-2xl mx-auto flex flex-col items-center", className)}>
	<div class="absolute top-0.5 w-75 h-48 overflow-hidden">
		<div class="absolute left-1/2 -top-16 -translate-x-1/2 h-16 w-16 bg-zinc-500 blur-2xl"></div>
	</div>

	<div class="w-full flex justify-center">
		<div class="h-0.5 w-75 bg-zinc-700/80 rounded-full"></div>
	</div>
</div>
