<script lang="ts">
	let { tweet }: { tweet: any } = $props();
</script>

{#if tweet.video || tweet.photos}
	<div class="flex flex-1 items-center justify-center">

		{#if tweet.video}
			<video
				poster={tweet.video.poster}
				autoplay
				loop
				muted
				playsinline
				class="rounded-xl border shadow-sm"
			>
				<source src={tweet.video.variants[0].src} type="video/mp4" />
			</video>
		{/if}

		{#if tweet.photos}
			<div class="flex gap-4 overflow-x-auto">
				{#each tweet.photos as photo}
					<img
						src={photo.url}
						width={photo.width}
						height={photo.height}
						alt={tweet.text}
						class="h-64 w-5/6 rounded-xl border object-cover"
					/>
				{/each}
			</div>
		{/if}

	</div>
{/if}