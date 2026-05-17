<script lang="ts">
	let { tweet }: { tweet: any } = $props();
</script>

<div class="flex flex-row items-start justify-between tracking-normal">
	<div class="flex items-center space-x-3">
		<a href={tweet.user.url} target="_blank" rel="noreferrer" class="shrink-0">
			<img
				src={tweet.user.profile_image_url_https}
				alt={tweet.user.screen_name}
				class="border-border/50 overflow-hidden rounded-full border"
				width="48"
				height="48"
			/>
		</a>

		<div class="flex flex-col gap-0.5">
			<a
				href={tweet.user.url}
				target="_blank"
				class="text-foreground flex items-center font-medium whitespace-nowrap hover:opacity-80"
			>
				{tweet.user.name}

				{#if tweet.user.verified || tweet.user.is_blue_verified}
					<span class="ml-1 text-blue-500">✔</span>
				{/if}
			</a>

			<a
				href={tweet.user.url}
				target="_blank"
				class="text-muted-foreground text-sm hover:text-foreground"
			>
				@{tweet.user.screen_name}
			</a>
		</div>
	</div>

	<a href={tweet.url} target="_blank">
		<svg viewBox="0 0 24 24" class="size-5 text-muted-foreground">
			<path
				fill="currentColor"
				d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4..."
			/>
		</svg>
	</a>
</div>