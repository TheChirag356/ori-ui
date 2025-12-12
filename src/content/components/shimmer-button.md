---
title: Shimmer Button
description: A button with a shimmering light which travels around the perimeter.
---

<script>
    import ShimmerButton from '$lib/registry/buttons/shimmer-button/shimmer-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';
</script>

<CodePreview>
    <ShimmerButton>Shimmer Button</ShimmerButton>
</CodePreview>

# Installation

```bash
bun x shadcn-svelte@latest add @ori/shimmer-button
```

# Usage

```svelte
import {ShimmerButton} from '$lib/components/shimmer-button';
```

```svelte
<ShimmerButton>Shimmer Button</ShimmerButton>
```

# Props

| Prop         | Type     | Default         | Description                  |
| ------------ | -------- | --------------- | ---------------------------- |
| `background` | `string` | `rgba(0,0,0,1)` | The background of the button |
| `className`  | `string` | `""`            | The classes of the button    |
| `children`   | `any`    | `undefined`     | The children of the button   |
