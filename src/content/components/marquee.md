---
title: Marquee
description: A scrolling text marquee component.
---

<script>
    import Marquee from '$lib/components/marquee-demo.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("marquee");
</script>

<CodePreview>
    <Marquee />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import Marquee from '$lib/components/ori/marquee/marquee.svelte';
```

```svelte
<Marquee pauseOnHover>
	<img src="https://example.com/logo1.png" alt="Logo 1" class="h-10" />
	<img src="https://example.com/logo2.png" alt="Logo 2" class="h-10" />
</Marquee>
```

### Props

| Prop         | Type      | Default | Description                                                |
| ------------ | --------- | ------- | ---------------------------------------------------------- |
| pauseOnHover | `boolean` | `false` | Pauses the animation when the user hovers over the marquee |
| vertical     | `boolean` | `false` | Scrolls vertically instead of horizontally                 |
| repeat       | `number`  | `4`     | Number of times the slot content is duplicated             |
| reverse      | `boolean` | `false` | Reverses the direction of the scroll animation             |
| class        | `string`  | `''`    | Additional CSS classes for the outer container             |
