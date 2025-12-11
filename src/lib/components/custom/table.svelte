<script>
	let { class: className = '', children } = $props();
</script>

<div class="my-6 w-full overflow-x-auto">
	<table class={`w-full border-collapse overflow-hidden rounded-xl text-sm ${className}`}>
		{@render children?.()}
	</table>
</div>
