---
title: Blur Text
description: A component that animates text by blurring it.
---

<script>
    import BlurText from '$lib/registry/text-animations/blur-text/blur-text.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';
</script>

<CodePreview>
    <BlurText
	text="This is Ori UI"
	blurType="blur"
	delay=60
	duration=800
    class="text-2xl font-semibold text-center"
/>
</CodePreview>

### Installation

```bash
    bun x shadcn-svelte@latest add https://ori-ui.vercel.app/r/blur-text.json
```

### Usage

```js
import BlurText from '$lib/components/ori/blur-text/blur-text.svelte';
```

```svelte
<BlurText
	text="This is Ori UI"
	blurType="blur"
	delay="60"
	duration="800"
	class="text-2xl font-semibold text-center"
/>
```

### Props

| Prop                  | Type         | Default       | Description                                |
| --------------------- | ------------ | ------------- | ------------------------------------------ |
| tag                   | string       | 'p'           | The HTML tag to render                     |
| text                  | string       | ''            | The text content to animate                |
| class                 | string       | ''            | Additional CSS classes                     |
| delay                 | number       | 100           | Delay between animations in ms             |
| duration              | number       | 600           | Duration of the animation in ms            |
| ease                  | string       | 'easeOutExpo' | Easing function for the animation          |
| blurType              | string       | 'blur'        | How to blur the text: 'blur' or 'glow'     |
| loop                  | boolean      | false         | Whether the animation should loop          |
| onAnimationCompletion | `() => void` | `() => {}`    | Callback function when animation completes |
