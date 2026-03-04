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
	{#snippet body()}
		<img
			src="https://images.unsplash.com/photo-1768452523244-11bba3ab7d51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Simple Card Preview"
			class="w-full h-40 object-cover rounded-md"
		/>
	{/snippet}
	{#snippet headingBottom()}
		<p class="text-sm text-gray-600 mb-4">Bottom Heading.</p>
	{/snippet}
</SimpleCard>
