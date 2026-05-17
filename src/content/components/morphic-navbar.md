---
title: Morphic Navbar
description: A dynamic navbar with morphing animation effects between active states.
---

<script>
    import MorphicNavbar from '$lib/registry/components/morphic-navbar/morphic-navbar.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("morphic-navbar");
</script>

<CodePreview>
    <MorphicNavbar />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import MorphicNavbar from '$lib/registry/components/morphic-navbar/morphic-navbar.svelte';
```

```svelte
<MorphicNavbar />
```

### Props

| Prop     | Type                               | Default                             | Description                                  |
| -------- | ---------------------------------- | ----------------------------------- | -------------------------------------------- |
| navItems | `{ href: string; name: string }[]` | Default home/works/blog/about links | Array of navigation items with href and name |
| class    | `string`                           | `''`                                | Additional CSS classes for the nav container |
