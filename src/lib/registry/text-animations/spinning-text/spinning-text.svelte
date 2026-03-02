<script lang="ts">
  // Props
  export let text: string = "";
  // Speed of a full rotation in seconds (renamed from duration for clarity)
  export let speed: number = 10;
  export let reverse: boolean = false;   // reverse direction
  export let radius: number = 100;       // radius in px
  export let className: string = "";     // extra classes
</script>

{#if text.length > 0}
	<div
		class={`relative inline-block ${className}`}
		style="
    width: {radius * 2}px;
    height: {radius * 2}px;
  "
	>
		<div
			class="spinning-container"
			style="
      animation-duration: {speed}s;
      animation-direction: {reverse ? 'reverse' : 'normal'};
    "
		>
			{#each text.split('') as char, i (i)}
				<span
					class="spinning-char"
					style="
          transform: rotate({(360 / text.length) * i}deg)
            translate({radius}px) rotate({-(360 / text.length) * i}deg);
        "
				>
					{char}
				</span>
			{/each}
		</div>
	</div>
{/if}

<style>
  .spinning-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: spin linear infinite;
  }

  .spinning-char {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    white-space: pre;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
