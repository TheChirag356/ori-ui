<script lang="ts" module>
    import { Button } from "$lib/components/ui/button";
    import { cn, type WithElementRef } from "$lib/utils";
    import { type VariantProps, tv } from "tailwind-variants";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

    export const liquidButtonVariants = tv({
        base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
				destructive:
					"bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white",
				outline:
					"bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border",
				secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    })

    export type LiquidButtonVariant = VariantProps<typeof liquidButtonVariants>["variant"];
    export type LiquidButtonSize = VariantProps<typeof liquidButtonVariants>["size"];

    export type LiquidButtonProps = WithElementRef<HTMLButtonAttributes> & WithElementRef<HTMLAnchorAttributes> & {
        variant?: LiquidButtonVariant;
        size?: LiquidButtonSize;
    }
</script>

<script>
    let {
        class: className = "",
        children,
        ...restProps
    }: LiquidButtonProps = $props();

    function handleHover(event: MouseEvent) {
        const button = event.currentTarget as HTMLButtonElement;
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    }
</script>

<Button
	class={cn('cursor-pointer relative overflow-hidden group z-0', className)}
	variant="secondary"
	onmousemove={handleHover}
	{...restProps}
>
	<div class="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
		{@render children?.()}
	</div>
	<div
		class="absolute inset-0 w-1/2 rounded-full translate-x-1/2 group-hover:-translate-x-3 bg-primary translate-y-[110%] group-hover:translate-y-0 group-hover:w-28 transition-all duration-300 ease-in-out pointer-events-none group-hover:rounded-none z-5"
	></div>
</Button>
