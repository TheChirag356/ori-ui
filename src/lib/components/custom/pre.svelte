<script>
	let { class: className = "", children } = $props();
</script>

<pre
	class={`${className}`}
>
	{@render children?.()}
</pre>
