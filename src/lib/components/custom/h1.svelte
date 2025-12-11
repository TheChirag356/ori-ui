<script>
	let { class: className = "", children } = $props();
</script>

<h1 class={`text-4xl font-bold mt-12 mb-4 tracking-tight ${className}`}>
	{@render children?.()}
</h1>
