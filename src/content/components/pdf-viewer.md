---
title: PDF Viewer
description: A component for viewing PDF documents with toolbar controls.
---

The PDF Viewer component allows users to view PDF documents directly within the application. It includes a toolbar with controls for navigating pages, zooming in and out.

<script>
    import { PdfViewer } from '$lib/registry/components/pdf-viewer';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("pdf-viewer");
</script>

<CodePreview>
    <PdfViewer.Root class="w-full flex flex-col gap-4" src="https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf">
        <PdfViewer.Toolbar />
        <PdfViewer.Renderer class="min-h-[500px] bg-muted/20 rounded-lg flex justify-center p-4" />
    </PdfViewer.Root>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts}>

### Usage

```js
import { PdfViewer } from '$lib/registry/components/pdf-viewer';
```

```svelte
<PdfViewer.Root src="/path/to/document.pdf" class="flex flex-col gap-4">
	<PdfViewer.Toolbar />
	<PdfViewer.Renderer class="min-h-[500px]" />
</PdfViewer.Root>
```

### Components

The PDF Viewer is composed of three components:

#### PdfViewer.Root

The root component that loads the PDF and provides context to child components.

| Prop            | Type                 | Default  | Description                     |
| --------------- | -------------------- | -------- | ------------------------------- |
| src             | string               | -        | URL or path to the PDF document |
| initialPage     | number               | 1        | Initial page to display         |
| initialZoom     | number               | 1        | Initial zoom level (1 = 100%)   |
| initialViewMode | 'single' \| 'scroll' | 'single' | Initial view mode               |
| class           | string               | ''       | Additional CSS classes          |

#### PdfViewer.Toolbar

A toolbar with page navigation and zoom controls.

| Prop               | Type    | Default | Description                   |
| ------------------ | ------- | ------- | ----------------------------- |
| showPageControls   | boolean | true    | Show page navigation controls |
| showZoomControls   | boolean | true    | Show zoom controls            |
| showViewModeToggle | boolean | true    | Show view mode toggle buttons |
| class              | string  | ''      | Additional CSS classes        |

#### PdfViewer.Renderer

The component that renders the PDF pages to a canvas.

| Prop  | Type   | Default | Description            |
| ----- | ------ | ------- | ---------------------- |
| class | string | ''      | Additional CSS classes |

### Context API

The PDF viewer exposes a context that can be accessed in custom components:

```svelte
<script>
  import { getContext } from 'svelte';
  
  const context = getContext('pdfViewerContext');
  
  // Available properties and methods:
  // context.currentPage - current page number
  // context.totalPages - total number of pages
  // context.zoom - current zoom level
  // context.viewMode - 'single' or 'scroll'
  // context.loading - loading state
  // context.error - error message if any
  // context.setPage(n) - go to page n
  // context.nextPage() - go to next page
  // context.prevPage() - go to previous page
  // context.setZoom(z) - set zoom level
  // context.zoomIn() - increase zoom by 0.25
  // context.zoomOut() - decrease zoom by 0.25
  // context.resetZoom() - reset zoom to 1
  // context.setViewMode(mode) - set view mode
  // context.toggleViewMode() - toggle between modes
</script>
```
