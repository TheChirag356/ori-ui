<script lang="ts">
  import { fly } from "svelte/transition";
  import { cn } from "$lib/utils";

  let { words, class: className = "", interval = 2500 }: {words: string[], class: string, interval: number } = $props();

  let currentIndex = $state(0);
  let paused = $state(false);
  let timer: number;

  $effect(() => {
    if (paused || !words?.length) return;

    timer = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
    }, interval);

    return () => clearInterval(timer);
  });
</script>

<div
	class="relative inline-flex overflow-hidden items-center"
	onpointerenter={() => (paused = true)}
	onpointerleave={() => (paused = false)}
>
	{#key currentIndex}
		<span
			class={cn('word-rotate absolute inset-0', className)}
			in:fly={{ duration: 350, y: 20, opacity: 0, delay: 200 }}
			out:fly={{ duration: 250, y: -20, opacity: 0 }}
		>
			{words[currentIndex]}
		</span>
	{/key}
	<span class="block invisible"
		>{words.reduce((w: string, a: string) => (w.length > a.length ? w : a), '')}</span
	>
</div>

<style>
  .word-rotate {
    white-space: nowrap;
    will-change: transform;
  }
</style>
