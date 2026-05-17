---
title: Glare Hover
description: A sleek glare effect on hover.
---

<script>
    import GlareHover from '$lib/registry/components/glare-hover/glare-hover.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("glare-hover");
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

| Prop               | Type      | Default      | Description                                                          |
| ------------------ | --------- | ------------ | -------------------------------------------------------------------- |
| glareColor         | `string`  | `'#ffffff'`  | Color of the glare streak                                            |
| glareOpacity       | `number`  | `0.5`        | Opacity of the glare effect (0–1)                                    |
| glareAngle         | `number`  | `-45`        | Angle of the glare streak in degrees                                 |
| glareSize          | `number`  | `250`        | Size of the glare gradient area as a percentage                      |
| transitionDuration | `number`  | `650`        | Duration of the glare transition in milliseconds                     |
| playOnce           | `boolean` | `false`      | If true, the glare plays only once on hover                          |
| width              | `string`  | `'500px'`    | Width of the container                                               |
| height             | `string`  | `'500px'`    | Height of the container                                              |
| background         | `string`  | `'#000'`     | Background color of the container                                    |
| borderRadius       | `string`  | `'10px'`     | Border radius of the container                                       |
| borderColor        | `string`  | `'#333'`     | Border color of the container                                        |
| class              | `string`  | `''`         | Additional CSS classes for custom styling                            |
