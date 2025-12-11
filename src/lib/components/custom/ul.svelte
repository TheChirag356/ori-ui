<script>
	let { class: className = "", children } = $props();
</script>

<ul class={`list-disc pl-6 my-4 space-y-1 ${className}`}>
	{@render children?.()}
</ul>
