---
title: File Upload
description: A minimal file upload form with background grid, drag and drop, and micro interactions.
---

<script>
    import FileUpload from '$lib/registry/components/file-upload/file-upload.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';
</script>

<CodePreview>
    <FileUpload />
</CodePreview>

### Installation

```bash
    bun x shadcn-svelte@latest add https://ori-ui.vercel.app/r/file-upload.json
```

### Usage

```js
import FileUpload from '$lib/registry/components/file-upload/file-upload.svelte';
```

```svelte
<FileUpload />
```

### Props

| Prop      | Type           | Default    | Description                                       |
| --------- | -------------- | ---------- | ------------------------------------------------- |
| mainText  | string         | 'Click Me' | The main text displayed on the button             |
| slideText | string         | 'Slide Me' | The text that appears on hover with slide effect  |
| class     | string         | ''         | Additional CSS classes for custom styling         |
| duration  | number         | 300        | Duration of the slide animation in milliseconds   |
| delay     | number         | 0          | Delay before the animation starts in milliseconds |
| easing    | EasingFunction | undefined  | Easing function for the animation                 |
