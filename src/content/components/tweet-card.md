---
title: Tweet Card
description: A card that displays a tweet with the author's name, handle, and profile picture.
---

<script lang="ts">
    import CodePreview from "$lib/components/code-preview.svelte";
    import { TweetCard } from "$lib/registry/components/tweet-card";

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("twitter-card");
    
    const id = "2055853690762977433";
</script>

<CodePreview>
    <TweetCard {id} />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

1. Using Remote Functions

```ts
import { query } from '@sveltejs/kit';
import { getTweet } from 'sveltweet/api';
```

### Props

| Name | Type     | Description                     |
| ---- | -------- | ------------------------------- |
| `id` | `string` | The ID of the tweet to display. |
