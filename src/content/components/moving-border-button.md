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

<MultiCodeBlock code={scripts}>

### Usage

```js
import MovingBorderButton from '$lib/registry/buttons/moving-border-button/moving-border-button.svelte';
```

```svelte
<MovingBorderButton>Borders are cool.</MovingBorderButton>
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
