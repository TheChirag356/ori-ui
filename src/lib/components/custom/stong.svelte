<script>
	let { class: className = "", children } = $props();
</script>

<strong class={`font-semibold text-foreground ${className}`}>
	{@render children?.()}
</strong>
