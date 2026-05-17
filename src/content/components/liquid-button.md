---
title: Liquid Button
description: A button that fills on hover.
---

<script>
    import LiquidButton from '$lib/registry/buttons/liquid-button/liquid-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("liquid-button");
</script>

<CodePreview>
    <LiquidButton>Hover Me</LiquidButton>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import LiquidButton from '$lib/registry/buttons/liquid-button/liquid-button.svelte';
```

```svelte
<LiquidButton>Hover Me</LiquidButton>
```

### Props

| Prop    | Type     | Default     | Description                               |
| ------- | -------- | ----------- | ----------------------------------------- |
| class   | `string` | `''`        | Additional CSS classes for custom styling |
| variant | `string` | `'default'` | Button variant (default, destructive, outline, secondary, ghost, link) |
| size    | `string` | `'default'` | Button size (default, sm, lg, icon, icon-sm, icon-lg) |

Extends all props from [shadcn-svelte Button](https://www.shadcn-svelte.com/docs/components/button).
