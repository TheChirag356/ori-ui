<script lang="ts">
    import { Button } from "$lib/components/ui/button"
	import { cn } from "$lib/utils";
    import { fly } from "svelte/transition";
    type ButtonProps = {
        mainText?: string;
        slideText?: string;
        class?: string;
        duration?: number;
        delay?: number;
    };

    let isHovering = $state(false);

    let {mainText = "Hover Me", slideText = "This is Ori", class: className, duration = 200, delay = 0, ...restProps}: ButtonProps = $props();
</script>

<Button
	class={cn('cursor-pointer relative overflow-hidden', className)}
	onmouseenter={() => (isHovering = true)}
	onmouseleave={() => (isHovering = false)}
	onfocus={() => (isHovering = true)}
	onblur={() => (isHovering = false)}
	aria-label={isHovering ? slideText : mainText}
	{...restProps}
>
	<span class="invisible whitespace-nowrap">
		{mainText.length > slideText.length ? mainText : slideText}
	</span>
	{#if !isHovering}
		<div
			class="absolute inset-0 flex items-center justify-center pointer-events-none"
			transition:fly={{ y: -20, duration, delay }}
			aria-hidden={isHovering}
		>
			{mainText}
		</div>
	{:else}
		<div
			class="absolute inset-0 flex items-center justify-center pointer-events-none"
			transition:fly={{ y: 20, duration, delay }}
			aria-hidden={!isHovering}
		>
			{slideText}
		</div>
	{/if}
</Button>
