<script>
	let { class: className = "", children } = $props();
</script>

<blockquote
	class={`border-l-4 pl-4 my-6 text-foreground/70 italic border-primary/40 ${className}`}
>
	{@render children?.()}
</blockquote>
