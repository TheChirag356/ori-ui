---
title: Flip Button
description: An animated flip button component with a variety of styles.
---

<script>
    import FlipButton from '$lib/registry/buttons/flip-button/flip-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';
</script>

<CodePreview>
    <FlipButton content="Hello World" />
</CodePreview>

### Installation

```bash
    bun x shadcn-svelte@latest add https://ori-ui.vercel.app/r/flip-button.json
```

### Usage

```js
import FlipButton from '$lib/registry/buttons/flip-button/flip-button.svelte';
```

```svelte
<FlipButton content="Hello World" />
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
