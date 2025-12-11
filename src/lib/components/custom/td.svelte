<script>
	let { class: className = "", children } = $props();
</script>

<td
	class={`px-4 py-3 align-middle text-foreground/90 border-b border-border ${className}`}
>
	{@render children?.()}
</td>
