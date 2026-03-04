---
title: Browser Window
description: A web browser window component, ideal for showcasing web content or creating mockups.
---

<script lang="ts">
    import CodePreview from '$lib/components/code-preview.svelte';
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';

    import { BrowserWindow } from '$lib/registry/components/browser-window';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("browser-window");
</script>

<CodePreview>
    <BrowserWindow url="https://oriui.app">
      <img
        src="https://unsplash.com/photos/volcano-erupting-at-night-with-city-lights-below-4uyu3PAGayQ"
        alt="Preview"
        class="size-full object-cover object-top"
      />
    </BrowserWindow>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```ts
import { BrowserWindow } from '$lib/components/ori/browser-window';
```

```svelte
<BrowserWindow url="https://oriui.app">
	<img
		src="https://unsplash.com/photos/volcano-erupting-at-night-with-city-lights-below-4uyu3PAGayQ"
		alt="Preview"
		class="size-full object-cover object-top"
	/>
</BrowserWindow>
```

### Props

| Prop        | Type                    | Default     | Description                                       |
| ----------- | ----------------------- | ----------- | ------------------------------------------------- |
| `url`       | `string`                | `undefined` | URL displayed in the address bar                  |
| `mode`      | `"default"/"simple"` | `"default"` | Controls whether extra top bar icons are rendered |
| `className` | `string`                | `""`        | Additional classes for the wrapper                |
| `children`  | `() => any`             | `undefined` | Content rendered inside the browser viewport      |
