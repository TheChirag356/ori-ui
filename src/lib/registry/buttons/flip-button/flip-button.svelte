<script lang="ts">
  import { cn } from "$lib/utils";
  import { fly } from "svelte/transition";

  type FlipButtonProps = {
    frontContent: string;
    backContent: string;
    class?: string;
  };

  let { frontContent, backContent, class: className }: FlipButtonProps = $props();

  let isHovering = $state(false);
</script>

<div
	class={cn('relative inline-grid overflow-hidden', className)}
	onpointerenter={() => (isHovering = true)}
	onpointerleave={() => (isHovering = false)}
>
	<!-- WIDTH SIZER -->
	<div class="col-start-1 row-start-1 invisible pointer-events-none px-4 py-2 font-inherit">
		{frontContent.length > backContent.length ? frontContent : backContent}
	</div>

	<!-- FRONT -->
	{#if !isHovering}
		<button
			class="col-start-1 row-start-1 bg-foreground text-background px-4 py-2 rounded-md"
			in:fly={{ y: -40, duration: 300 }}
			out:fly={{ y: -40, duration: 300 }}
		>
			{frontContent}
		</button>
	{/if}

	<!-- BACK -->
	{#if isHovering}
		<button
			class="col-start-1 row-start-1 bg-foreground text-background px-4 py-2 rounded-md"
			in:fly={{ y: 40, duration: 300 }}
			out:fly={{ y: 40, duration: 300 }}
		>
			{backContent}
		</button>
	{/if}
</div>
