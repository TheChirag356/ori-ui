---
title: Word Rotate
description: A vertical rotation of words
---

<script>
    import WordRotate from '$lib/registry/text-animations/word-rotate/word-rotate.svelte';
    import CodePreview from "$lib/components/code-preview.svelte";

    const words = ["Hello", "World"];

    import {MultiCodeBlock} from "$lib/registry/components/code-block"
    import {multiInstallScriptUtil} from "$lib/utils"
    const scripts = multiInstallScriptUtil("word-rotate")
</script>

<CodePreview>
    <h1 class="text-4xl font-bold">
        <WordRotate class="text-primary" {words} />
    </h1>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import WordRotate from '$lib/components/ori/word-rotate/word-rotate.svelte';
```

```svelte
<h1 class="text-4xl font-bold">
	<WordRotate class="ml-2 text-primary" {words} />
</h1>
```

### Props

| Prop     | Type     | Default | Description                          |
| -------- | -------- | ------- | ------------------------------------ |
| words    | string[] | []      | The words to rotate                  |
| interval | number   | 2500    | The interval between rotations in ms |
| class    | string   | ''      | Additional CSS classes               |
