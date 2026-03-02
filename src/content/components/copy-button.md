---
title: Copy Button
description: A copy button component with a variety of styles and animations.
---

<script>
    import CopyButton from '$lib/registry/buttons/copy-button/copy-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';
    
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("copy-button");
</script>

<CodePreview>
    <CopyButton content="Hello World" />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import { CopyButton } from '$lib/components/ori/copy-button';
```

```svelte
<CopyButton content="Hello World" />
```

### Props

| Prop    | Type     | Default | Description                           |
| ------- | -------- | ------- | ------------------------------------- |
| content | `string` | `''`    | The text to be copied to the clipboard |
| class   | `string` | `''`    | Additional CSS classes for custom styling |

Support all ButtonProps from shadcn-svelte/ui