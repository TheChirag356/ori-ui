---
title: Split Text
description: A component that animates text by splitting it into words and applying staggered animations.
---

<script>
    import SplitText from '$lib/registry/text-animations/split-text/split-text.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';
</script>

<CodePreview>
    <SplitText
	text="This is Ori UI"
	splitType="chars"
	delay=60
	duration=800
    class="text-2xl font-semibold text-center"
/>
</CodePreview>

### Installation

```bash
    bun x shadcn-svelte@latest add https://ori-ui.vercel.app/r/split-text.json
```

### Usage

```js
import SplitText from '$lib/components/ori/split-text/split-text.svelte';
```

```svelte
<SplitText
	text="This is Ori UI"
	splitType="chars"
	delay=60
	duration=800
	class="text-2xl font-semibold text-center"
/>
```

### Props

| Prop                  | Type       | Default       | Description                                |
| --------------------- | ---------- | ------------- | ------------------------------------------ |
| tag                   | string     | 'p'           | The HTML tag to render                     |
| text                  | string     | ''            | The text content to animate                |
| class                 | string     | ''            | Additional CSS classes                     |
| delay                 | number     | 100           | Delay between animations in ms             |
| duration              | number     | 600           | Duration of the animation in ms            |
| ease                  | string     | 'easeOutExpo' | Easing function for the animation          |
| splitType             | string     | 'chars'       | How to split the text: 'chars' or 'words'  |
| loop                  | boolean    | false         | Whether the animation should loop          |
| onAnimationCompletion | `() => void` | `() => {}`      | Callback function when animation completes |
