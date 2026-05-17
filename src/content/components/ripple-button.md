---
title: Ripple Button
description: A ripple button component 
---

<script>
    import RippleButton from '$lib/registry/buttons/ripple-button/ripple-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("ripple-button");
</script>

<CodePreview>
    <RippleButton>Hello World</RippleButton> 
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import RippleButton from '$lib/registry/buttons/ripple-button/ripple-button.svelte';
```

```svelte
<RippleButton>Hello World</RippleButton>
```

### Props

| Prop        | Type     | Default      | Description                                          |
| ----------- | -------- | ------------ | ---------------------------------------------------- |
| rippleColor | `string` | `'#ffffff'`  | Color of the ripple effect                           |
| duration    | `string` | `'600ms'`    | Duration of the ripple animation (CSS time string)   |
| class       | `string` | `''`         | Additional CSS classes for custom styling            |

Extends all props from [shadcn-svelte Button](https://www.shadcn-svelte.com/docs/components/button).
