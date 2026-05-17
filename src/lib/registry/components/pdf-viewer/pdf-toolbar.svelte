<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export interface PdfToolbarProps {
    class?: string;
    showPageControls?: boolean;
    showZoomControls?: boolean;
    showViewModeToggle?: boolean;
  }
</script>

<script lang="ts">
  import { getContext } from 'svelte';
  import { cn } from '$lib/utils';
  import type { PdfViewerContext } from './pdf-viewer-root.svelte';
  import {
    IconChevronLeft,
    IconChevronRight,
    IconMinus,
    IconPlus,
    IconZoomReset,
    IconLayoutList,
    IconFile
  } from '@tabler/icons-svelte';

  let {
    class: className = '',
    showPageControls = true,
    showZoomControls = true,
    showViewModeToggle = true
  }: PdfToolbarProps = $props();

  const context = getContext<PdfViewerContext>('pdfViewerContext');

  // Derived values from context
  let currentPage = $derived(context.currentPage);
  let totalPages = $derived(context.totalPages);
  let zoom = $derived(context.zoom);
  let viewMode = $derived(context.viewMode);

  let pageInputValue = $state('');
  
  // Sync input with current page
  $effect(() => {
    pageInputValue = String(currentPage);
  });

  function handlePageInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const value = parseInt(input.value, 10);
    if (!isNaN(value) && value >= 1 && value <= totalPages) {
      context.setPage(value);
    }
  }

  function handlePageKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      handlePageInput(e);
    }
  }

  function handleZoomSelect(e: Event) {
    const select = e.target as HTMLSelectElement;
    const value = parseFloat(select.value);
    if (!isNaN(value)) {
      context.setZoom(value);
    }
  }

  const zoomPresets = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
</script>

<div
	class={cn(
		'pdf-toolbar flex flex-wrap items-center justify-center gap-2 rounded-lg bg-muted/50 backdrop-blur-sm border border-border p-2',
		className
	)}
>
	{#if showViewModeToggle}
		<div class="flex items-center gap-1">
			<button
				onclick={() => context.setViewMode('single')}
				class={cn(
					'inline-flex h-8 w-8 items-center justify-center rounded-md border border-border transition-colors',
					viewMode === 'single'
						? 'bg-primary text-primary-foreground'
						: 'bg-background text-foreground hover:bg-accent'
				)}
				aria-label="Single page view"
				title="Single page view"
			>
				<IconFile size={18} />
			</button>
			<button
				onclick={() => context.setViewMode('scroll')}
				class={cn(
					'inline-flex h-8 w-8 items-center justify-center rounded-md border border-border transition-colors',
					viewMode === 'scroll'
						? 'bg-primary text-primary-foreground'
						: 'bg-background text-foreground hover:bg-accent'
				)}
				aria-label="Scroll view"
				title="Scroll view (all pages)"
			>
				<IconLayoutList size={18} />
			</button>
		</div>

		<div class="h-6 w-px bg-border"></div>
	{/if}

	{#if showPageControls}
		<div class="flex items-center gap-1.5">
			<button
				onclick={() => context.prevPage()}
				disabled={currentPage <= 1}
				class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-background border border-border text-foreground transition-colors hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
				aria-label="Previous page"
			>
				<IconChevronLeft size={18} />
			</button>

			<div class="flex items-center gap-1.5 px-2">
				<input
					type="text"
					inputmode="numeric"
					value={pageInputValue}
					oninput={(e) => (pageInputValue = (e.target as HTMLInputElement).value)}
					onblur={handlePageInput}
					onkeydown={handlePageKeydown}
					class="h-8 w-12 rounded-md border border-border bg-background px-2 text-center text-sm text-foreground focus:outline-none focus:border-primary"
					aria-label="Current page"
				/>
				<span class="text-sm text-muted-foreground">of {totalPages}</span>
			</div>

			<button
				onclick={() => context.nextPage()}
				disabled={currentPage >= totalPages}
				class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-background border border-border text-foreground transition-colors hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
				aria-label="Next page"
			>
				<IconChevronRight size={18} />
			</button>
		</div>
	{/if}

	{#if showPageControls && showZoomControls}
		<div class="h-6 w-px bg-border"></div>
	{/if}

	{#if showZoomControls}
		<div class="flex items-center gap-1.5">
			<button
				onclick={() => context.zoomOut()}
				disabled={zoom <= 0.25}
				class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-background border border-border text-foreground transition-colors hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
				aria-label="Zoom out"
			>
				<IconMinus size={18} />
			</button>

			<select
				value={zoom}
				onchange={handleZoomSelect}
				class="h-8 rounded-md border border-border bg-background px-2 text-sm text-foreground focus:outline-none focus:border-primary cursor-pointer"
				aria-label="Zoom level"
			>
				{#each zoomPresets as preset}
					<option value={preset} selected={Math.abs(zoom - preset) < 0.01}>
						{Math.round(preset * 100)}%
					</option>
				{/each}
				{#if !zoomPresets.some((p) => Math.abs(zoom - p) < 0.01)}
					<option value={zoom} selected>{Math.round(zoom * 100)}%</option>
				{/if}
			</select>

			<button
				onclick={() => context.zoomIn()}
				disabled={zoom >= 5}
				class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-background border border-border text-foreground transition-colors hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
				aria-label="Zoom in"
			>
				<IconPlus size={18} />
			</button>

			<button
				onclick={() => context.resetZoom()}
				class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-background border border-border text-foreground transition-colors hover:bg-accent"
				aria-label="Reset zoom"
			>
				<IconZoomReset size={18} />
			</button>
		</div>
	{/if}
</div>
