<script lang="ts" module>
    export type Image = {
        src: string;
        alt: string;
    };
</script>

<script lang="ts">
    import { IconChevronLeft, IconChevronRight } from "@tabler/icons-svelte";
    import { cn } from "$lib/utils";

    let { images, class: className }: {images: Image[], class?: string} = $props();

    let currentSlide = $state(0);
</script>

<div class={cn('size-75 relative group rounded-2xl overflow-hidden', className)}>
	<div class="absolute inset-0 flex items-center">
		<div
			class="flex transition-transform duration-400 ease-in-out h-full w-full"
			style:transform={`translateX(-${currentSlide * 100}%)`}
		>
			{#each images as image, i (image.src + i)}
				<img src={image.src} class="h-full w-full min-w-full object-cover" alt={image.alt} />
			{/each}
		</div>
	</div>

	<div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center space-x-2">
		{#each images as _, i (i)}
			<div
				class="w-1.5 h-1.5 rounded-full transition-all {currentSlide === i
					? 'bg-white'
					: 'bg-zinc-300 scale-75'}"
			></div>
		{/each}
	</div>

	<button
		onclick={() => (currentSlide = (currentSlide - 1 + images.length) % images.length)}
		class="absolute opacity-0 group-hover:opacity-100 cursor-pointer transition left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-950 flex items-center justify-center"
	>
		<IconChevronLeft class="h-3.5 w-3.5 text-white" />
	</button>

	<button
		onclick={() => (currentSlide = (currentSlide + 1) % images.length)}
		class="absolute opacity-0 group-hover:opacity-100 cursor-pointer transition right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-950 flex items-center justify-center"
	>
		<IconChevronRight class="h-3.5 w-3.5 text-white" />
	</button>
</div>
