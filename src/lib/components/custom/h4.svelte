<script>
	let { class: className = "", children } = $props();
</script>

<h4 class={`text-xl font-semibold mt-6 mb-2 ${className}`}>
	{@render children?.()}
</h4>
