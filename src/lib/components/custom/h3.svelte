<script>
	let { class: className = "", children } = $props();
</script>

<h3 class={`text-2xl font-semibold mt-8 mb-3 tracking-tight ${className}`}>
	{@render children?.()}
</h3>
