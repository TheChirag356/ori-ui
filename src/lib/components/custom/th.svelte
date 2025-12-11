<script>
	let { class: className = "", children } = $props();
</script>

<th
	class={`px-4 py-3 text-left align-middle border-b border-border font-medium ${className}`}
>
	{@render children?.()}
</th>
