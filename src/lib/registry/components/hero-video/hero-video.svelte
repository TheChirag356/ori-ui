<script lang="ts">
	import { fade, fly, scale } from "svelte/transition";

	type AnimationStyle =
		| "from-bottom"
		| "from-center"
		| "from-top"
		| "from-left"
		| "from-right"
		| "fade";

	let {
		videoSrc,
		thumbnailSrc,
		thumbnailAlt = "Video thumbnail",
		HeroVideoAlt = "Hero Video",
		animationStyle = "from-center",
		autoplay = true,
		class: className
	}: {
		videoSrc: string;
		thumbnailSrc: string;
		thumbnailAlt?: string;
		HeroVideoAlt?: string;
		animationStyle?: AnimationStyle;
		autoplay?: boolean;
		class?: string;
	} = $props();

	let isVideoOpen = $state(false);

	function openVideo() {
		isVideoOpen = true;
	}

	function closeVideo() {
		isVideoOpen = false;
	}

	function handleKey(e: KeyboardEvent) {
		if (e.key === "Escape") closeVideo();
	}

	let transitionProps: any = {};

	if (animationStyle === "from-bottom") transitionProps = { y: 200 };
	if (animationStyle === "from-top") transitionProps = { y: -200 };
	if (animationStyle === "from-left") transitionProps = { x: -200 };
	if (animationStyle === "from-right") transitionProps = { x: 200 };

	function getVideoSrc() {
		if (!autoplay) return videoSrc;

		if (videoSrc.includes("youtube") || videoSrc.includes("youtu.be")) {
			const join = videoSrc.includes("?") ? "&" : "?";
			return `${videoSrc}${join}autoplay=1`;
		}

		return videoSrc;
	}
</script>

<div class={`relative ${className ?? ''}`}>
	<button
		type="button"
		aria-label="Play video"
		class="group relative cursor-pointer border-0 bg-transparent p-0"
		onclick={openVideo}
	>
		<img
			src={thumbnailSrc}
			alt={thumbnailAlt}
			class="w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
		/>

		<div class="absolute inset-0 flex items-center justify-center">
			<div class="flex size-28 items-center justify-center rounded-full bg-black/20 backdrop-blur">
				<div
					class="flex size-20 items-center justify-center rounded-full bg-white shadow-lg transition group-hover:scale-110"
				>
					▶
				</div>
			</div>
		</div>
	</button>

	{#if isVideoOpen}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
			onclick={closeVideo}
			onkeydown={handleKey}
			role="presentation"
			in:fade
			out:fade
		>
			{#if animationStyle === 'from-center'}
				<div
					class="relative mx-4 aspect-video w-full max-w-4xl"
					in:scale={{ duration: 200, start: 0.5 }}
					out:scale={{ duration: 150, start: 0.5 }}
					onclick={(e) => e.stopPropagation()}
					onkeydown={(e) => e.key === 'Escape' && closeVideo()}
					role="dialog"
					aria-modal="true"
					aria-label="Video player"
				>
					<button
						class="absolute -top-12 right-0 rounded-full bg-black/50 p-2 text-white"
						onclick={closeVideo}
					>
						✕
					</button>

					<div class="size-full overflow-hidden rounded-xl border border-white">
						<iframe
							src={getVideoSrc()}
							title={HeroVideoAlt}
							class="size-full"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
			{:else if animationStyle === 'fade'}
				<div
					class="relative mx-4 aspect-video w-full max-w-4xl"
					in:fade={{ duration: 250 }}
					out:fade={{ duration: 200 }}
					onclick={(e) => e.stopPropagation()}
					onkeydown={(e) => e.key === 'Escape' && closeVideo()}
					role="dialog"
					aria-modal="true"
					aria-label="Video player"
				>
					<button
						class="absolute -top-12 right-0 rounded-full bg-black/50 p-2 text-white"
						onclick={closeVideo}
					>
						✕
					</button>

					<div class="size-full overflow-hidden rounded-xl border border-white">
						<iframe
							src={getVideoSrc()}
							title="Hero Video"
							class="size-full"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
			{:else}
				<div
					class="relative mx-4 aspect-video w-full max-w-4xl"
					in:fly={{ ...transitionProps, duration: 250 }}
					out:fly={{ ...transitionProps, duration: 200 }}
					onclick={(e) => e.stopPropagation()}
					onkeydown={(e) => e.key === 'Escape' && closeVideo()}
					role="dialog"
					aria-modal="true"
					aria-label="Video player"
				>
					<button
						class="absolute -top-12 right-0 rounded-full bg-black/50 p-2 text-white"
						onclick={closeVideo}
					>
						✕
					</button>

					<div class="size-full overflow-hidden rounded-xl border border-white">
						<iframe
							src={getVideoSrc()}
							title="Hero Video"
							class="size-full"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>
