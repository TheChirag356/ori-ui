import Root from './pdf-viewer-root.svelte';
import Toolbar from './pdf-toolbar.svelte';
import Renderer from './pdf-renderer.svelte';

export { 
  type PdfViewerContext, 
  type PdfViewerRootProps,
  type ViewMode 
} from './pdf-viewer-root.svelte';
// export { type PdfRendererProps } from './pdf-renderer.svelte';
export { type PdfToolbarProps } from './pdf-toolbar.svelte';

export const PdfViewer = {
  Root,
  Toolbar,
  Renderer
};

export { Root, Toolbar, Renderer };
