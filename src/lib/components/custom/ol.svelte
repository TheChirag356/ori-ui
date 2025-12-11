<script>
	let { class: className = "", children } = $props();
</script>

<ol class={`list-decimal pl-6 my-4 space-y-1 ${className}`}>
	{@render children?.()}
</ol>
