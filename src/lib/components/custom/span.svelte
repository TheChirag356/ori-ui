<script>
	let { class: className = "", children } = $props();
</script>

<span class={`text-foreground/90 ${className}`}>
	{@render children?.()}
</span>
