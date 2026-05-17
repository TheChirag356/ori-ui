<script lang="ts">
	let { tweet }: { tweet: any } = $props();
</script>

<div class="text-[15px] leading-relaxed tracking-normal wrap-break-words">
	{#each tweet.entities as entity}
		{#if entity.type === "text"}
			<span class="text-foreground">{@html entity.text}</span>
		{:else}
			<a
				href={entity.href}
				target="_blank"
				rel="noopener noreferrer"
				class="text-muted-foreground hover:text-foreground"
			>
				{entity.text}
			</a>
		{/if}
	{/each}
</div>