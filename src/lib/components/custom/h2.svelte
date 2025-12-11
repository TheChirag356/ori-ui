<script>
	let { class: className = "", children } = $props();
</script>

<h2 class={`text-3xl font-semibold mt-10 mb-4 tracking-tight ${className}`}>
	{@render children?.()}
</h2>
