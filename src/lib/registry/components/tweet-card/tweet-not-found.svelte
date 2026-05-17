<script lang="ts">
	let { class: className = "" }: { class?: string } = $props();
</script>

<div
	class={`flex size-full flex-col items-center justify-center gap-2 rounded-lg border p-4 ${className}`}
>
	<h3 class="text-sm text-muted-foreground">Tweet not found</h3>
</div>
