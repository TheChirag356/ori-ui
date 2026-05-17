---
title: Hero Video
description: A hero video component.
---

<script lang="ts">
    import CodePreview from '$lib/components/code-preview.svelte';    
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';

    import { HeroVideo } from "$lib/registry/components/hero-video";
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("hero-video");
</script>

<CodePreview>
    <HeroVideo
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
        thumbnailSrc="/assets/ogImage.png"
        HeroVideoAlt="Some Important Video"
        animationStyle="from-top"
        autoplay
    />
</CodePreview>ī

### Installation

<MultiCodeBlock code={scripts} />

### Props

| Prop             | Type      | Default      | Description                                                                                                         |
| ---------------- | --------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| `videoSrc`       | `string`  | `''`         | The source URL of the video to be displayed.                                                                        |
| `thumbnailSrc`   | `string`  | `''`         | The source URL of the thumbnail image to be displayed before the video is played.                                   |
| `thumbnailAlt`   | `string`  | `''`         | The alt text for the thumbnail image.                                                                               |
| `HeroVideoAlt`   | `string`  | `''`         | The alt text for the hero video.                                                                                    |
| `animationStyle` | `string`  | `'from-top'` | The animation style for the video appearance. Options include 'from-top', 'from-bottom', 'from-left', 'from-right'. |
| `autoplay`       | `boolean` | `false`      | Whether the video should autoplay when it becomes visible.                                                          |
