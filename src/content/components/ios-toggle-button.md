---
title: IOS Toggle Button
description: A sleek iOS-style toggle button with smooth animations and customizable options.
---

<script>
    import IosToggleButton from '$lib/registry/buttons/ios-toggle-button/ios-toggle-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("ios-toggle-button");
</script>

<CodePreview>
    <IosToggleButton>Toggle Me</IosToggleButton>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts}>

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
