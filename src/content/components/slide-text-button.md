---
title: Slide Text Button
description: An animated button with vertical slide text transition effect
---

<script>
    import SlideTextButton from '$lib/registry/buttons/slide-text-button/slide-text-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';
    
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("liquid-button");
</script>

<CodePreview>
    <SlideTextButton variant="secondary" />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts}>

### Usage

```js
import SlideTextButton from '$lib/registry/buttons/slide-text-button/slide-text-button.svelte';
```

```svelte
<SlideTextButton variant="secondary" mainText="Hover Me" slideText="This is Ori" />
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
