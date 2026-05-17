---
title: Spinning Text
description: The Spinning Text component animates text in a circular motion with customizable speed, direction, color, and transitions for dynamic and engaging effects.
---

<script>
    import SpinningText from "$lib/registry/text-animations/spinning-text/spinning-text.svelte";
    import CodePreview from "$lib/components/code-preview.svelte";
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil } from "$lib/utils";
    const scripts = multiInstallScriptUtil("spinning-text");
</script>

<CodePreview>
    <SpinningText
  text="learn more • earn more • grow more • "
  radius={100}
  speed={10}
  class="text-sm font-semibold text-neutral-300"
/>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import SpinningText from '$lib/components/ori/spinning-text';
```

```svelte
<SpinningText
	text="Hello World • Hello World • "
	radius={80}
	speed={8}
	className="text-sm font-semibold"
/>
```

### Props

| Prop      | Type      | Default | Description                                        |
| --------- | --------- | ------- | -------------------------------------------------- |
| text      | `string`  | `''`    | The text to display in a circular spinning pattern |
| speed     | `number`  | `10`    | Duration of one full rotation in seconds           |
| reverse   | `boolean` | `false` | Reverses the spin direction                        |
| radius    | `number`  | `100`   | Radius of the spinning circle in pixels            |
| className | `string`  | `''`    | Additional CSS classes applied to each character   |
