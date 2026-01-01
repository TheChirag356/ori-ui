<script lang="ts" module>
    import { cn } from '$lib/utils';
    import { IconArrowRight } from '@tabler/icons-svelte';
    export type ButtonProps = {
        children?: import('svelte').Snippet;
        class?: string;
        role?: string;
    };
</script>

<script lang="ts">
    let {children, class: className, role="button", ...restProps}: ButtonProps = $props();
</script>

<button
	{role}
	class={cn(
		'relative group overflow-hidden flex items-center justify-center gap-2 cursor-pointer',
		'transition-all duration-500 ease-out',
		className
	)}
	{...restProps}
>
	<!-- Expanding background -->
	<span class="pointer-events-none absolute inset-0 flex items-center justify-center">
		<span
			class="size-4 rounded-full bg-foreground scale-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[14] transform-gpu"
		></span>
	</span>

	<!-- Text -->
	<span
		class="relative z-10 transition-all duration-500 ease-out group-hover:text-background group-hover:-translate-x-2"
	>
		{@render children?.()}
	</span>

	<!-- Arrow -->
	<span
		class="relative hidden group-hover:block z-10 opacity-0 translate-x-[-8px] transition-all duration-500 ease-out delay-75 group-hover:opacity-100 group-hover:translate-x-0 text-background"
	>
		<IconArrowRight />
	</span>
</button>
