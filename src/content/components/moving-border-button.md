---
title: Moving Border Button
description: A border that moves around the container. Perfect for making your buttons stand out.
---

<script>
    import MovingBorderButton from '$lib/registry/buttons/moving-border-button/moving-border-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("moving-border-button");
</script>

<CodePreview>
    <MovingBorderButton>Borders are cool.</MovingBorderButton>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import MovingBorderButton from '$lib/components/ori/moving-border-button';
```

```svelte
<MovingBorderButton>Borders are cool.</MovingBorderButton>
```

### Props

| Prop           | Type     | Default      | Description                                          |
| -------------- | -------- | ------------ | ---------------------------------------------------- |
| class          | `string` | `''`         | Additional CSS classes for the inner content area    |
| containerClass | `string` | `undefined`  | Additional CSS classes for the outer button wrapper  |
| borderClass    | `string` | `undefined`  | Additional CSS classes for the SVG border rect       |
| borderRadius   | `string` | `'28'`       | Corner radius of the button (in px as string)        |
| duration       | `number` | `3000`       | Duration of one full border animation loop (ms)      |
| borderColor    | `string` | `'#0ea5e9'`  | Color of the animated moving border                  |

Extends all props from [shadcn-svelte Button](https://www.shadcn-svelte.com/docs/components/button).
