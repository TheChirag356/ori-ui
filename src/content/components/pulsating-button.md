---
title: Pulsating Button
description: An animated pulsating button useful for capturing attention of users.
---

<script>
    import { PulsatingButton } from "$lib/registry/buttons/pulsating-button"
    import CodePreview from "$lib/components/code-preview.svelte"
</script>

<CodePreview>
    <PulsatingButton>Click Me</PulsatingButton>
</CodePreview>

### Installation

```bash
    bun x shadcn-svelte@latest add https://oriui.app/r/pulsating-button.json
```

### Usage

```js
import { PulsatingButton } from '$lib/components/pulsating-button';
```

```svelte
<PulsatingButton>Click Me</PulsatingButton>
```
