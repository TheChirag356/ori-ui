<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';

	const message = $derived(page.status === 404 ? page?.error?.message : 'Something went wrong');
</script>

<div class="h-dvh flex flex-col items-center justify-center text-center">
	<h1 class="text-4xl font-bold mb-4">{message}</h1>

	<Button href="/" class="mt-2">Go to Home</Button>
</div>
