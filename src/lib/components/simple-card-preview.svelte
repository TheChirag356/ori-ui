<script lang="ts">
    import { SimpleCard } from '$lib/registry/components/simple-card';
</script>

<SimpleCard class="w-80">
	{#snippet headingTop()}
		<h2 class="text-lg font-semibold mb-2">Card Title</h2>
		<p class="text-sm text-gray-600 mb-4">This is a simple card description.</p>
		<div class="text-sm text-gray-800">
			Card content goes here. You can add any elements you like!
		</div>
	{/snippet}
</SimpleCard>
