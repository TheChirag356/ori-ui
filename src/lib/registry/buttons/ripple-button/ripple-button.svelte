<script lang="ts" module>
    import { Button, type ButtonProps } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";

    export type RippleButtonProps = ButtonProps & {
        rippleColor?: string;
        duration?: string;
    }

</script>

<script lang="ts">
    let {
        class: className = "",
        children,
        rippleColor = "#ffffff",
        duration = "600ms",
        ...restProps
    }: RippleButtonProps = $props();

    let buttonRipples = $state<Array<{x: number, y: number; size: number; key: number}>>([]);

    function handleClick(event: MouseEvent) {
        createRipple(event);
    }

    function createRipple(event: MouseEvent) {
        const button = event.currentTarget as HTMLButtonElement;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size/2;
        const y = event.clientY - rect.top - size/2;

        const newRipple = {x, y, size, key: Date.now()};
        buttonRipples = [...buttonRipples, newRipple];
    }
</script>

<button
	class={cn(
		'bg-background border border-foreground/40 text-primary relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 py-2 text-center',
		className
	)}
	onclick={handleClick}
	{...restProps}
	><div class="relative z-10">{@render children?.()}</div>
	<span class="pointer-events-none absolute inset-0">
		{#each buttonRipples as ripple (ripple.key)}
			<span
				class="ripple"
				style="left: {ripple.x}px; top: {ripple.y}px; width: {ripple.size}px; height: {ripple.size}px; --duration: {duration}; --ripple-color: {rippleColor};"
				onanimationend={() => (buttonRipples = buttonRipples.filter((r) => r.key !== ripple.key))}
			></span>
		{/each}
	</span>
</button>

<style>
  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: rippling var(--duration, 600ms) ease-out;
    background-color: var(--ripple-color, #ffffff);
  }

  @keyframes rippling {
    0% {
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
</style>
