<script lang="ts">
    import { cn } from "$lib/utils";
    let {children, class: className} = $props();
</script>

<div
	class={cn(
		'w-full min-h-56 border border-border flex justify-center items-center rounded-md p-4',
		className
	)}
>
	{@render children?.()}
</div>
