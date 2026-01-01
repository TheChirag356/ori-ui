---
title: Marquee
description: A scrolling text marquee component.
---

<script>
    import Marquee from '$lib/components/marquee-demo.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("marquee");
</script>

<CodePreview>
    <Marquee />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts}>

### Usage

```js
import LiquidButton from '$lib/registry/buttons/liquid-button/liquid-button.svelte';
```

```svelte
<LiquidButton>Hover Me</LiquidButton>
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
