---
title: IOS Toggle Button
description: A sleek iOS-style toggle button with smooth animations and customizable options.
---

<script>
    import IosToggleButton from '$lib/registry/buttons/ios-toggle-button/ios-toggle-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';
</script>

<CodePreview>
    <IosToggleButton>Toggle Me</IosToggleButton>
</CodePreview>

### Installation

```bash
    bun x shadcn-svelte@latest add https://ori-ui.vercel.app/r/ios-toggle-button.json
```

### Usage

```js
import IosToggleButton from '$lib/registry/buttons/ios-toggle-button/ios-toggle-button.svelte';
```

```svelte
<IosToggleButton>Toggle Me</IosToggleButton>
```

### Props

| Prop  | Type   | Default | Description                               |
| ----- | ------ | ------- | ----------------------------------------- |
| class | string | ''      | Additional CSS classes for custom styling |
