<script lang="ts">
  let {code, class: className}: {code: string, class?: string} = $props();
  import { cn } from "$lib/utils";
  import CopyButton from "$lib/registry/buttons/copy-button/copy-button.svelte";
</script>

<CopyButton
	content={code}
	class={cn(
		'absolute z-10 right-0 top-0 px-1 rounded-md cursor-pointer text-sm',
		className
	)}
	variant="ghost"
/>
