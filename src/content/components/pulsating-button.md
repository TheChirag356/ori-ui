---
title: Pulsating Button
description: An animated pulsating button useful for capturing attention of users.
---

<script>
    import { PulsatingButton } from "$lib/registry/buttons/pulsating-button"
    import CodePreview from "$lib/components/code-preview.svelte"

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("pulsating-button");
</script>

<CodePreview>
    <PulsatingButton>Click Me</PulsatingButton>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import { PulsatingButton } from '$lib/components/pulsating-button';
```

```svelte
<PulsatingButton>Click Me</PulsatingButton>
```

### Props

| Prop       | Type      | Default                      | Description                                           |
| ---------- | --------- | ---------------------------- | ----------------------------------------------------- |
| class      | `string`  | `''`                         | Additional CSS classes for custom styling             |
| hoverOnly  | `boolean` | `false`                      | If true, the pulse ring only appears on hover         |
| pulseColor | `string`  | `'var(--color-foreground)'`  | Color of the pulsating ring                           |
| duration   | `number`  | `1.5`                        | Duration of one pulse cycle in seconds               |

Extends all props from [shadcn-svelte Button](https://www.shadcn-svelte.com/docs/components/button).
