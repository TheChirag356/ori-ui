<script>
	let { class: className = "", children } = $props();
</script>

<tr class={`border-b border-border last:border-0 hover:bg-muted/30 transition-colors ${className}`}>
	{@render children?.()}
</tr>
