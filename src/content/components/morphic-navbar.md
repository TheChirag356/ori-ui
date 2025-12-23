---
title: Morphic Navbar
description: A dynamic navbar with morphing animation effects between active states.
---

<script>
    import MorphicNavbar from '$lib/registry/components/morphic-navbar/morphic-navbar.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';
</script>

<CodePreview>
    <MorphicNavbar />
</CodePreview>

### Installation

```bash
    bun x shadcn-svelte@latest add https://ori-ui.vercel.app/r/morphic-navbar.json
```

### Usage

```js
import MorphicNavbar from '$lib/registry/components/morphic-navbar/morphic-navbar.svelte';
```

```svelte
<MorphicNavbar />
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
