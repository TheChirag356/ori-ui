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

| Name      | Type     | Default        | Description                        |
| --------- | -------- | -------------- | ---------------------------------- |
| src       | `string` | `""`           | The source URL of the video.       |
| text      | `string` | `""`           | The text to be displayed.          |
| fontSize  | `number` | `20`           | The font size of the text.         |
| fontWeight| `number` | `400`          | The font weight of the text.       |
| class     | `string` | `""`           | Additional classes to be applied.  |
| loop      | `boolean`| `true`         | Whether the video should loop.     |
| muted     | `boolean`| `true`         | Whether the video should be muted. |
| autoplay  | `boolean`| `true`         | Whether the video should autoplay.  |
