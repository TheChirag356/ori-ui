<script>
	let { class: className = "", children } = $props();
</script>

<code class={`px-1.5 py-0.5 rounded tracking-tight font-mono ${className}`}>
	{@render children?.()}
</code>
