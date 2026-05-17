<script lang="ts">
	import type { Tweet } from "sveltweet";
	import TweetSkeleton from "./tweet-skeleton.svelte";
	import TweetNotFound from "./tweet-not-found.svelte";
	import { browser } from "$app/environment";

	let { id, tweet, class: className = "" }: { id?: string; tweet?: Tweet; class?: string } = $props();

	async function fetchTweetData(tweetId: string): Promise<Tweet> {
		if (browser) {
			const res = await fetch(`/api/tweet/${tweetId}`);
			if (!res.ok) {
				throw new Error("Failed to fetch tweet");
			}
			return res.json();
		} else {
			const { getTweet } = await import("sveltweet/api");
			const data = await getTweet(tweetId);
			if (!data) {
				throw new Error("Tweet not found");
			}
			return data as Tweet;
		}
	}

	let tweetPromise = $derived(
		tweet ? Promise.resolve(tweet) : id ? fetchTweetData(id) : Promise.reject(new Error("No tweet or id provided"))
	);
</script>

{#await tweetPromise}
	<TweetSkeleton class={className} />
{:then loadedTweet}
	{#if loadedTweet}
		<div class={`flex w-full max-w-lg flex-col gap-4 rounded-xl border p-5 ${className}`}>
			<!-- HEADER -->
			<div class="flex items-start justify-between">
				<div class="flex items-center gap-3">
					<a href={loadedTweet.user.url} target="_blank" rel="noreferrer">
						<img
							src={loadedTweet.user.profile_image_url_https}
							alt={loadedTweet.user.name}
							class="h-10 w-10 rounded-full border"
						/>
					</a>

					<div class="flex flex-col leading-tight">
						<a
							href={loadedTweet.user.url}
							target="_blank"
							class="font-medium hover:opacity-80"
						>
							{loadedTweet.user.name}
						</a>

						<span class="text-sm text-muted-foreground">
							@{loadedTweet.user.screen_name}
						</span>
					</div>
				</div>

				<a href={loadedTweet.url} target="_blank" rel="noreferrer">
					<svg viewBox="0 0 24 24" class="h-5 w-5 text-muted-foreground">
						<path
							fill="currentColor"
							d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
						></path>
					</svg>
				</a>
			</div>

			<!-- BODY -->
			<p class="text-[15px] leading-relaxed">{loadedTweet.text}</p>

			<!-- MEDIA -->
			{#if loadedTweet.photos?.length}
				<div class="flex gap-3 overflow-x-auto">
					{#each loadedTweet.photos as photo}
						<img
							src={photo.url}
							alt={loadedTweet.text}
							class="h-64 w-auto rounded-lg border object-cover"
						/>
					{/each}
				</div>
			{/if}

			{#if loadedTweet.video}
				<video
					class="rounded-lg border"
					poster={loadedTweet.video.poster}
					autoplay
					muted
					loop
					playsinline
				>
					<source src={loadedTweet.video.variants[0].src} type="video/mp4" />
				</video>
			{/if}

			<!-- FOOTER -->
			<div class="text-sm text-muted-foreground">
				{new Date(loadedTweet.created_at).toLocaleDateString()}
			</div>
		</div>
	{:else}
		<TweetNotFound class={className} />
	{/if}
{:catch}
	<TweetNotFound class={className} />
{/await}