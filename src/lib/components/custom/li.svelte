<script>
	let { class: className = "", children } = $props();
</script>

<li class={`leading-relaxed list-disc ${className}`}>
	{@render children?.()}
</li>
