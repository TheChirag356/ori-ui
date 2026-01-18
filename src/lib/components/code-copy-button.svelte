<script lang="ts">
  let {code, class: className}: {code: string, class?: string} = $props();
  import { cn } from "$lib/utils";
  import CopyButton from "$lib/registry/buttons/copy-button/copy-button.svelte";
</script>

<CopyButton
	content={code}
	class={cn(
		'absolute backdrop-blur-lg z-10 ml-auto top-0 right-0 px-1 rounded-md cursor-pointer text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300',
		className
	)}
	variant="ghost"
/>
