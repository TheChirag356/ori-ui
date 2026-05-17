<script lang="ts">
	let { class: className = "" } = $props();
</script>

<div class={`flex min-w-72 flex-col gap-2 rounded-xl border p-4 ${className}`}>
	<div class="flex gap-2">
		<div class="size-10 rounded-full bg-primary/10"></div>
		<div class="h-10 w-full rounded-md bg-primary/10"></div>
	</div>

	<div class="h-20 w-full rounded-md bg-primary/10"></div>
</div>