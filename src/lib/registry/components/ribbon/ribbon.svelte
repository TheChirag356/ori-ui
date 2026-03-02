<script lang="ts" module>
    export type RibbonType = {
        bgColor: string;
        color?: string;
        text: string;
        rotate: string;
        direction: number; // 1 for left-to-right, -1 for right-to-left
        zIndex: string;
        top: string;
    };
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { IconSparkles } from '@tabler/icons-svelte';
  import { cn } from '$lib/utils';
  
  let { ribbons, class: className }: { ribbons: RibbonType[], class: string} = $props();

  let container: HTMLElement;
  
  let baseX = $state(0); 
  let currentScrollY = 0;

  onMount(() => {
    let rafId: number;

    const update = () => {
      currentScrollY = window.scrollY;
      
      baseX = currentScrollY * 0.01;

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  });
  const repeatCount = 7;
</script>

<div
	class={cn(
		'relative w-full h-32 md:h-56 lg:h-68 flex items-center justify-center overflow-hidden bg-transparent my-8',
		`dark:text-black text-white font-bold text-lg md:text-2xl uppercase tracking-wider`,
		className
	)}
	bind:this={container}
>
	{#each ribbons as ribbon}
		<div
			class={`absolute left-[-20%] right-[-20%] py-2 md:py-4 shadow-sm flex items-center justify-center ${ribbon.bgColor} ${ribbon.rotate} ${ribbon.zIndex} overflow-hidden whitespace-nowrap will-change-transform transform-gpu`}
		>
			<div
				class="flex items-center gap-4"
				style:transform={`translateX(${(baseX * ribbon.direction * -1) % 50}%)`}
			>
				{#each Array(repeatCount) as _}
					<span class="flex items-center gap-4 shrink-0 px-4">
						{ribbon.text}
						<IconSparkles size={20} class="fill-current" />
					</span>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
    :global(body) {
        overflow-x: hidden;
    }
</style>
