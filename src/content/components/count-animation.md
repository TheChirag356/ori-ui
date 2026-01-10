---
title: Count Animation
description: A component that animates counting up/down to a target number.
---

<script>
    import { countanimation } from '$lib/registry/text-animations/count-animation';
    import CodePreview from '$lib/components/code-preview.svelte';

    import { multiInstallScriptUtil } from '$lib/utils';
    const scripts = multiInstallScriptUtil("count-animation");
    import { MultiCodeBlock } from '$lib/registry/components/code-block';

    const reverseData = {
        from: 100,
        to: 0,
        delay: 2,
        duration: 2
    };
</script>

<CodePreview class="flex flex-col gap-4">
    <div use:countanimation>0</div>
    <div use:countanimation={reverseData}>100</div>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

Import the `countanimation` action and use it on any element containing a number.

```js
import { countanimation } from '$lib/components/ori/count-animation';
```

```svelte
<div use:countanimation>0</div>
```

if you want to customize the animation, pass an object with the desired properties:

```svelte
<div use:countanimation={{ from: 50, to: 200, delay: 1, duration: 3, ease: 'easeInOut' }}>50</div>
```

### Props

| Prop     | Type   | Default  | Description                                                                           |
| -------- | ------ | -------- | ------------------------------------------------------------------------------------- |
| from     | number | 0        | The number to start counting from.                                                    |
| to       | number | 100      | The target number to count to.                                                        |
| delay    | number | 0        | Delay in seconds before the animation starts.                                         |
| duration | number | 0        | Duration in seconds for the counting animation.                                       |
| ease     | string | 'linear' | Easing function for the animation (e.g., 'linear', 'easeIn', 'easeOut', 'easeInOut'). |

Consult [motion.dev](https://motion.dev/docs/animate#options) for more options.
