<script lang="ts">
    import { Button, type ButtonProps } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
    import { fade } from 'svelte/transition';

	type CopyButtonProps = ButtonProps & {
		content: string;
	};

    let {class: className, content, ...restProps}: CopyButtonProps = $props();
    let isClicked = $state(false);

    function handleClick() {
        isClicked = true;
        try {
            navigator.clipboard.writeText(content);
        } catch (error) {
            console.log("Failed to copy text: ", error);
        } finally {
            setTimeout(() => {
                isClicked = false;
            }, 2000);
        }     
    }
</script>

<Button
	data-testid="copy-button"
	class={cn('relative cursor-pointer backdrop-blur-xs', className)}
	{...restProps}
	onclick={handleClick}
	disabled={isClicked}
>
	<!-- Copy Icon -->
	{#if !isClicked}
		<svg
			in:fade={{ duration: 150, delay: 150 }}
			out:fade={{ duration: 150 }}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="absolute stroke-current"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
				d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
			/><path
				d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
			/></svg
		>
	{:else}
		<!-- Check Icon -->
		<svg
			in:fade={{ duration: 150, delay: 150 }}
			out:fade={{ duration: 150 }}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="absolute stroke-current"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg
		>
	{/if}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="#000000"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="invisible"
		><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg
	>
</Button>
