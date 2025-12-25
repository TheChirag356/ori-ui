<script lang="ts" module>
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	export type MovingBorderButtonProps = ButtonProps & {
		borderRadius?: string;
		containerClass?: string;
		borderClass?: string;
		duration?: number;
		class?: string;
	};
</script>

<script lang="ts">
	import MovingBorder from "./moving-border.svelte";
    import { cn } from '$lib/utils';
    let { class: className = "", children, borderRadius="1.75rem", containerClass, borderClass, duration, ...restProps }: MovingBorderButtonProps = $props();
</script>

<button
	class={cn('relative h-16 w-40 overflow-hidden bg-transparent cursor-pointer p-px text-xl', containerClass)}
	style="border-radius: {borderRadius};"
	{...restProps}
>
	<div class="absolute inset-0" style="border-radius: calc({borderRadius}*0.96);">
		<MovingBorder {duration} rx="30%" ry="30%">
			<div
				class={cn(
					'h-20 w-20 bg-[radial-gradient(#0ea5e9_40%, transparent_60%)] opacity-[0.8]',
					borderClass
				)}
			></div>
		</MovingBorder>
	</div>

	<div
		class={cn(
			'relative flex h-full w-full items-center justify-center border border-neutral-800 bg-neutral-900/80 text-sm text-white antialiased backdrop-blur-xl',
			className
		)}
		style="border-radius: calc({borderRadius}*0.96);"
	>
		{@render children?.()}
	</div>
</button>
