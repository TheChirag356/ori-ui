---
title: Copy Button
description: A copy button component with a variety of styles and animations.
---

<script>
    import CopyButton from '$lib/registry/buttons/copy-button/copy-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';
</script>

<CodePreview>
    <CopyButton content="Hello World" />
</CodePreview>

### Installation

```bash
    bun x shadcn-svelte@latest add https://ori-ui.vercel.app/r/copy-button.json
```

### Usage

```js
import CopyButton from '$lib/registry/buttons/copy-button/copy-button.svelte';
```

```svelte
<CopyButton content="Hello World" />
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
