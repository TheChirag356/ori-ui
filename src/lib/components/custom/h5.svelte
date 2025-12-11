<script>
	let { class: className = "", children } = $props();
</script>

<h5 class={`text-lg font-semibold mt-4 mb-2 ${className}`}>
	{@render children?.()}
</h5>
