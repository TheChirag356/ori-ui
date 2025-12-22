<script lang="ts">
    import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
    import { slide } from 'svelte/transition';

    type FlipButtonProps = {
        class?: string;
        content: string;
    };

    let {class: className, content, ...restProps}: FlipButtonProps = $props();
    let isHovering = $state(false);
</script>

<div
	class={cn('relative', className)}
	{...restProps}
	onmouseenter={() => (isHovering = true)}
	onmouseleave={() => (isHovering = false)}
>
	{#if !isHovering}
		<button class="absolute" in:slide out:slide>{content}</button>
	{:else}
		<button class="absolute" in:slide out:slide>Back {content}</button>
	{/if}
	<div class="invisible">
		{content}
	</div>
</div>
