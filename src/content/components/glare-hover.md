---
title: Glare Hover
description: A sleek glare effect on hover.
---

<script>
    import GlareHover from '$lib/registry/components/glare-hover/glare-hover.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("file-upload");
</script>

<CodePreview>
        <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            class="bg-red-400"
            width="300px"
            height="200px"
        >
            <h2 style="font-size: 3rem; font-weight: 900; color: #333; margin: 0">
                Hover Me
            </h2>
        </GlareHover>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import GlareHover from '$lib/components/ori/glare-hover/glare-hover.svelte';
```

```svelte
<GlareHover
	glareColor="#ffffff"
	glareOpacity={0.3}
	glareAngle={-30}
	glareSize={300}
	transitionDuration={800}
	playOnce={false}
>
	<h2 style="font-size: 3rem; font-weight: 900; color: #333; margin: 0">Hover Me</h2>
</GlareHover>
```

### Props

| Prop      | Type           | Default    | Description                                       |
| --------- | -------------- | ---------- | ------------------------------------------------- |
| mainText  | string         | 'Click Me' | The main text displayed on the button             |
| slideText | string         | 'Slide Me' | The text that appears on hover with slide effect  |
| class     | string         | ''         | Additional CSS classes for custom styling         |
| duration  | number         | 300        | Duration of the slide animation in milliseconds   |
| delay     | number         | 0          | Delay before the animation starts in milliseconds |
| easing    | EasingFunction | undefined  | Easing function for the animation                 |
