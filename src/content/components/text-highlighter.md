---
title: Text Highlighter
description: A text highlighter that mimics the effect of a human-drawn marker stroke.
---

<script>
	import Highlighter from "$lib/registry/text-animations/text-highlighter/text-highlighter.svelte";
    import CodePreview from "$lib/components/code-preview.svelte";

	import {multiInstallScriptUtil} from "$lib/utils";
	import {MultiCodeBlock} from "$lib/registry/components/code-block"
	const scripts = multiInstallScriptUtil("text-highlighter");
</script>

<CodePreview>
<p>
	This is a 
	<Highlighter action="underline" color="#FF9800">
		magical
	</Highlighter>
	text example! It makes important <Highlighter class="text-black" action="highlight" color="#c56200">text stand out</Highlighter> in a unique way.
</p>
</CodePreview>

## Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import Highlighter from "$lib/components/ori/text-highlighter/text-highlighter.svelte";
```

```svelte
<p>
	This is a
	<Highlighter action="underline" color="#FF9800">magical</Highlighter>
	text example! It makes important <Highlighter
		class="text-black"
		action="highlight"
		color="#c56200">text stand out</Highlighter
	> in a unique way.
</p>
```

### Props

| Name        | Type                                                                                               | Default                            | Description                            |
| ----------- | -------------------------------------------------------------------------------------------------- | ---------------------------------- | -------------------------------------- |
| action      | `underline`, `box`, `circle`, `highlight`, `strike-through`, `crossed-off`, `bracket`, `underline` | The type of annotation to be used. |
| color       | `string`                                                                                           | `#ffd1dc`                          | The color of the annotation.           |
| strokeWidth | `number`                                                                                           | `1.5`                              | The width of the stroke.               |
| duration    | `number`                                                                                           | `2000`                             | The duration of the animation.         |
| delay       | `number`                                                                                           | `1000`                             | The delay before the animation starts. |
| padding     | `number`                                                                                           | `2`                                | The padding around the text.           |
| class       | `string`                                                                                           | `""`                               | Additional classes to be applied.      |
