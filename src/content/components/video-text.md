---
title: Video Text
description: A text component with a video background.
---

<script>
	import VideoText from "$lib/registry/text-animations/video-text/video-text.svelte";
    import CodePreview from "$lib/components/code-preview.svelte";

	import {multiInstallScriptUtil} from "$lib/utils";
	import {MultiCodeBlock} from "$lib/registry/components/code-block"
	const scripts = multiInstallScriptUtil("video-text");
</script>

<CodePreview>
        <VideoText
            src="/assets/video-text.mp4"
            text="HELLO"
            fontSize={25}
            fontWeight={900}
            class="h-100 w-full"
        />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import VideoText from "$lib/components/ori/video-text/video-text.svelte";
```

```svelte
<VideoText
	src="/assets/video-text.mp4"
	text="HELLO"
	fontSize={25}
	fontWeight={900}
	class="h-full w-full"
/>
```

### Props

| Name             | Type                             | Default        | Description                                        |
| ---------------- | -------------------------------- | -------------- | -------------------------------------------------- |
| src              | `string`                         | (required)     | The source URL of the video.                       |
| text             | `string`                         | (required)     | The text to be displayed as a mask over the video. |
| fontSize         | `string \| number`               | `20`           | Font size (number = vw units; string = raw CSS).   |
| fontWeight       | `string \| number`               | `'bold'`       | The font weight of the text.                       |
| textAnchor       | `string`                         | `'middle'`     | SVG text-anchor attribute for alignment.           |
| dominantBaseline | `string`                         | `'middle'`     | SVG dominant-baseline for vertical alignment.      |
| fontFamily       | `string`                         | `'sans-serif'` | Font family for the mask text.                     |
| loop             | `boolean`                        | `true`         | Whether the video should loop.                     |
| muted            | `boolean`                        | `true`         | Whether the video should be muted.                 |
| autoplay         | `boolean`                        | `true`         | Whether the video should autoplay.                 |
| preload          | `'auto' \| 'metadata' \| 'none'` | `'auto'`       | Video preload strategy.                            |
| as               | `keyof HTMLElementTagNameMap`    | `'div'`        | The HTML element to render as the container.       |
| class            | `string`                         | `''`           | Additional classes to be applied.                  |
