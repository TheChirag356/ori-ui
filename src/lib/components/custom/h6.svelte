<script>
	let { class: className = "", children } = $props();
</script>

<h6 class={`text-base font-semibold mt-4 mb-2 uppercase tracking-wide ${className}`}>
	{@render children?.()}
</h6>
