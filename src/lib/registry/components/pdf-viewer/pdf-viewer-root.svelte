<script lang="ts" module>
  import { cn } from '$lib/utils';
  import type { PDFDocumentProxy } from 'pdfjs-dist';
  import type { Snippet } from 'svelte';

  export type ViewMode = 'single' | 'scroll';

  export interface PdfViewerContext {
    currentPage: number;
    totalPages: number;
    zoom: number;
    viewMode: ViewMode;
    pdf: PDFDocumentProxy | null;
    loading: boolean;
    error: string | null;
    setPage: (page: number) => void;
    setZoom: (zoom: number) => void;
    setViewMode: (mode: ViewMode) => void;
    nextPage: () => void;
    prevPage: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
    resetZoom: () => void;
    toggleViewMode: () => void;
  }

  export interface PdfViewerRootProps {
    src: string;
    children?: Snippet;
    class?: string;
    initialPage?: number;
    initialZoom?: number;
    initialViewMode?: ViewMode;
  }
</script>

<script lang="ts">
  import { onMount, setContext } from 'svelte';
  // Import is dynamic in onMount to prevent SSR issues with DOMMatrix
  // import * as pdfjsLib from 'pdfjs-dist';

  let {
    src,
    children,
    class: className = '',
    initialPage = 1,
    initialZoom = 1,
    initialViewMode = 'single'
  }: PdfViewerRootProps = $props();

  // PDF state using Svelte 5 runes
  let currentPage = $state(1);
  let totalPages = $state(0);
  let zoom = $state(1);
  let viewMode = $state<ViewMode>('single');
  let pdf = $state<PDFDocumentProxy | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  // Navigation functions
  function setPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      currentPage++;
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
    }
  }

  function setZoom(z: number) {
    zoom = Math.max(0.25, Math.min(5, z));
  }

  function zoomIn() {
    setZoom(zoom + 0.25);
  }

  function zoomOut() {
    setZoom(zoom - 0.25);
  }

  function resetZoom() {
    zoom = 1;
  }

  function setViewMode(mode: ViewMode) {
    viewMode = mode;
  }

  function toggleViewMode() {
    viewMode = viewMode === 'single' ? 'scroll' : 'single';
  }

  // Create context with getters that return current values
  const context: PdfViewerContext = {
    get currentPage() { return currentPage; },
    get totalPages() { return totalPages; },
    get zoom() { return zoom; },
    get viewMode() { return viewMode; },
    get pdf() { return pdf; },
    get loading() { return loading; },
    get error() { return error; },
    setPage,
    setZoom,
    setViewMode,
    nextPage,
    prevPage,
    zoomIn,
    zoomOut,
    resetZoom,
    toggleViewMode
  };

  setContext('pdfViewerContext', context);

  onMount(async () => {
    try {
      loading = true;
      error = null;

      const pdfjsLib = await import('pdfjs-dist');

      // Set up worker for pdfjs-dist v5
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url
      ).toString();

      // Load the PDF document
      const loadingTask = pdfjsLib.getDocument(src);
      const doc = await loadingTask.promise;
      
      pdf = doc;
      totalPages = doc.numPages;
      currentPage = Math.min(initialPage, doc.numPages);
      zoom = initialZoom;
      viewMode = initialViewMode;
      loading = false;
    } catch (err) {
      console.error('Failed to load PDF:', err);
      error = err instanceof Error ? err.message : 'Failed to load PDF';
      loading = false;
    }
  });
</script>

<div class={cn('pdf-viewer-root relative', className)}>
	{#if loading}
		<div class="flex items-center justify-center p-8">
			<div class="flex flex-col items-center gap-3">
				<div
					class="h-8 w-8 animate-spin rounded-full"
					style="border: 4px solid hsl(var(--primary)); border-top-color: transparent;"
				></div>
				<span class="text-muted-foreground text-sm">Loading PDF...</span>
			</div>
		</div>
	{:else if error}
		<div class="flex items-center justify-center p-8">
			<div class="text-destructive text-center">
				<p class="font-medium">Error loading PDF</p>
				<p class="text-sm opacity-80">{error}</p>
			</div>
		</div>
	{:else}
		{@render children?.()}
	{/if}
</div>
