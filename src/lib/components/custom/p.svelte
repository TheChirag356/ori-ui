<script>
	let { class: className = "", children } = $props();
</script>

<p class={`text-foreground/90 leading-relaxed my-4 text-[17px] ${className}`}>
	{@render children?.()}
</p>
