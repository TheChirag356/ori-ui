<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";

	type ButtonProps = {
		children?: () => any;
		class?: string;
	};

	let {
		class: className = "",
		children,
		...restProps
	}: ButtonProps = $props();
</script>

<Button
	class={cn(
		'relative cursor-pointer group transition-all bg-black text-white dark:bg-white dark:text-black',
		'inline-flex items-center justify-center gap-2 shrink-0',
		'border-0 bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] text-primary-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:[filter:blur(0.75rem)] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</Button>
