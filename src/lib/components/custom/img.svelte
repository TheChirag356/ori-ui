<script>
	let {
		src = "",
		alt = "",
		title = "",
		class: className = "",
		width,
		height,
		caption = ""
	} = $props();
</script>

<figure class="my-6">
	<img
		{src}
		{alt}
		{title}
		{width}
		{height}
		loading="eager"
		class={`rounded-xl shadow-md w-full h-auto object-cover ${className}`}
	/>

	{#if caption}
		<figcaption class="mt-2 text-center text-sm text-foreground/60">
			{caption}
		</figcaption>
	{/if}
</figure>
