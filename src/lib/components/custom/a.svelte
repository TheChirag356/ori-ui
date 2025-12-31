<script>
	let { href = '', class: className = '', children } = $props();
</script>

<a
	{href}
	class={`font-medium text-accent underline-offset-4 hover:underline ${className}`}
	target={href.startsWith('http') ? '_blank' : undefined}
	rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
>
	{@render children?.()}
</a>
