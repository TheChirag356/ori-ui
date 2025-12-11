<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils";

    interface ShimmerButtonProps {
        shimmerColor?: string;
        shimmerSize?: string;
        borderRadius?: string;
        shimmerDuration?: string;
        background?: string;
        class?: string;
        children: any;
    }

    let { class: className = "", children, shimmerColor = "#ffffff", shimmerSize = "0.05em", shimmerDuration = "3s", borderRadius = "100px", background = "rgba(0,0,0,1)" }: ShimmerButtonProps = $props();
</script>

<Button class={cn('', className)}>
	{@render children?.()}
</Button>
