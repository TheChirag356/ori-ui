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
 import Marquee from "$lib/components/ori/marquee";
```

```svelte
<Marquee>
	<img src="https://icon.icepanel.io/Technology/svg/Svelte.svg" alt="Svelte Logo" />
	<img src="https://icon.icepanel.io/Technology/svg/TypeScript.svg" alt="TypeScript Logo" />
	<img src="https://icon.icepanel.io/Technology/svg/Bun.svg" alt="Bun Logo" />
	<img src="https://icon.icepanel.io/Technology/svg/GitHub.svg" alt="Github Logo" />
</Marquee>
```

### Props

| Prop         | Type    | Default | Description                                   |
| ------------ | ------- | ------- | --------------------------------------------- |
| pauseOnHover | boolean | false   | Whether to pause the marquee on hover         |
| vertical     | boolean | false   | Whether to scroll vertically                  |
| repeat       | number  | 4       | Number of times to repeat the children        |
| reverse      | boolean | false   | Whether to reverse the scrolling direction    |
| class        | string  | ""      | Additional CSS classes for custom styling     |
| children     | Snippet |         | The content to be scrolled within the marquee |
