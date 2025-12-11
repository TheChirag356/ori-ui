<script>
	let { class: className = "", children } = $props();
</script>

<thead class={`bg-muted/40 text-foreground font-semibold ${className}`}>
	{@render children?.()}
</thead>
