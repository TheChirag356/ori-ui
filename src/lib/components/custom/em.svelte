<script>
	let { class: className = "", children } = $props();
</script>

<em class={`italic text-foreground/90 ${className}`}>
	{@render children?.()}
</em>
