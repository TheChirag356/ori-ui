---
title: Rainbow Button
description: An animated button with a rainbow effect.
---

<script>
    import RainbowButton from '$lib/registry/buttons/rainbow-button/rainbow-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("rainbow-button");
</script>

<CodePreview>
    <RainbowButton>Rainbow Button</RainbowButton>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import RainbowButton from '$lib/registry/buttons/rainbow-button/rainbow-button.svelte';
```

```svelte
<RainbowButton>Rainbow Button</RainbowButton>
```

### Props

| Prop  | Type     | Default | Description                               |
| ----- | -------- | ------- | ----------------------------------------- |
| class | `string` | `''`    | Additional CSS classes for custom styling |

Extends all props from [shadcn-svelte Button](https://www.shadcn-svelte.com/docs/components/button).
