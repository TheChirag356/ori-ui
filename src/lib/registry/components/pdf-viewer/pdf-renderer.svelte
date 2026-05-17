<script lang="ts">
	import { getContext } from 'svelte';
	import { browser } from '$app/environment';
	import { cn } from '$lib/utils';
	import type { PdfViewerContext } from './pdf-viewer-root.svelte';
	
	export interface PdfRendererProps {
		class?: string;
	}

	let { class: className = '' }: PdfRendererProps = $props();

	const context = getContext<PdfViewerContext>('pdfViewerContext');
	let container = $state<HTMLDivElement>();

	let pdf = $derived(context?.pdf);
	let currentPage = $derived(context?.currentPage);
	let zoom = $derived(context?.zoom);
	let viewMode = $derived(context?.viewMode);

	let rendering = false;

	$effect(() => {
		if (browser && container && pdf && !rendering) {
			renderPages(currentPage, zoom, viewMode);
		}
	});

	async function renderPages(pageIndex: number | undefined, currentZoom: number | undefined, currentViewMode: string | undefined) {
		if (!container || !pdf || rendering) return;
		
		rendering = true;
		container.innerHTML = '';
		
		const pagesToRender = currentViewMode === 'single' ? [pageIndex || 1] : Array.from({ length: pdf.numPages }, (_, i) => i + 1);

		for (const pageNum of pagesToRender) {
			try {
				const page = await pdf.getPage(pageNum);
				const viewport = page.getViewport({ scale: currentZoom || 1 });

				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');
				if (!ctx) continue;

				// Use devicePixelRatio for better rendering on high-DPI screens
				const dpr = window.devicePixelRatio || 1;
				canvas.width = viewport.width * dpr;
				canvas.height = viewport.height * dpr;
				canvas.style.width = `${viewport.width}px`;
				canvas.style.height = `${viewport.height}px`;
				
				ctx.scale(dpr, dpr);

				// Wrapper for styling
				const wrapper = document.createElement('div');
				wrapper.className = 'mb-4 shadow-sm bg-white flex-shrink-0 relative overflow-hidden';
				// Setting exact dimensions so reflow doesn't jitter
				wrapper.style.width = `${viewport.width}px`;
				wrapper.style.height = `${viewport.height}px`;
				wrapper.appendChild(canvas);
				
				container.appendChild(wrapper);

				await page.render({
					canvasContext: ctx,
					viewport
				}).promise;
			} catch (err) {
				console.error(`Error rendering page ${pageNum}:`, err);
			}
		}
		rendering = false;
	}
</script>

<div
	bind:this={container}
	class={cn('pdf-renderer flex flex-col items-center overflow-auto p-4 w-full h-full', className)}
></div>
