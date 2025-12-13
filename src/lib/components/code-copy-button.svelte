<script lang="ts">
  let {code}: {code: string} = $props();

  let isCopying = $state(false);
  let isCopied = $state(false);
  let error = $state<string | null>(null);
  async function copyToClipboard(code: string) {
	isCopying = true;
	error = null;

	try {
		await navigator.clipboard.writeText(code);
		isCopied = true;

		// keep "Copied!" visible
		setTimeout(() => {
			isCopied = false;
		}, 1500);
	} catch (err) {
		console.error("Failed to copy text:", err);
		error = err instanceof Error ? err.message : String(err);
	} finally {
		isCopying = false;
	}
}
</script>

<button
	class="absolute z-10 right-0 top-0 -translate-y-1/2 bg-background px-2 rounded-md cursor-pointer text-sm border"
	onclick={() => copyToClipboard(code)}
>
	{#if isCopying && !isCopied}
		Copying...
	{:else if isCopied && !isCopying}
		Copied!
	{:else}
		Copy
	{/if}
</button>
