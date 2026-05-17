---
title: Gallery
description: A simple gallery component to display images.
---

<script>
    import CodePreview from '$lib/components/code-preview.svelte';
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';

    import { Gallery } from '$lib/registry/components/gallery';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("gallery");

const images = [
    { src: "https://images.unsplash.com/photo-1772366088755-04aaab36c92b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8", alt: "Gallery Component 1" },
    {src: "https://images.unsplash.com/photo-1768452523244-11bba3ab7d51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Gallery Component 2" },
];
</script>

<CodePreview>
    <Gallery images={images} />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```svelte
<script lang="ts">
    import { Gallery } from "$lib/components/ori/gallery";
    const images = [
        { src: "https://picsum.photos/seed/1/800/600", alt: "Image 1" },
        { src: "https://picsum.photos/seed/2/800/600", alt: "Image 2" },
        { src: "https://picsum.photos/seed/3/800/600", alt: "Image 3" },
    ];
</script>

<Gallery {images} />
```

### Props

| Prop   | Type    | Default | Description                                              |
| ------ | ------- | ------- | -------------------------------------------------------- |
| images | Image[] | []      | Array of image objects to render inside the slider       |
| class  | string  | ''      | Additional CSS classes for custom container styling      |

### Image Object Props

| Property | Type   | Description                |
| -------- | ------ | -------------------------- |
| src      | string | Image URL or path          |
| alt      | string | Alt text for accessibility |
