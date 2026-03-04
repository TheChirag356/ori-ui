---
title: Simple Card
description: A simple card component with a title, description, and content area.
---

<script lang="ts">
    import CodePreview from '$lib/components/code-preview.svelte';
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';

    import SimpleCardPreview from '$lib/components/simple-card-preview.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("simple-card");
</script>

<CodePreview>
    <SimpleCardPreview />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```ts
import SimpleCard from "$lib/components/ori/simple-card.svelte";
```

```svelte
<SimpleCard>
	{#snippet headingTop()}
		<h3 class="text-lg font-semibold">Card Title</h3>
	{/snippet}
	{#snippet body()}
		<div class="flex items-center justify-center h-full text-muted-foreground">Preview Content</div>
	{/snippet}
	{#snippet headingBottom()}
		<p>This is a small description for the card.</p>
	{/snippet}
</SimpleCard>
```

### Props

| Prop            | Type      | Description                                   |
| --------------- | --------- | --------------------------------------------- |
| `class`         | `string`  | Optional additional classes for the root card |
| `headingTop`    | `Snippet` | Content rendered at the top of the card       |
| `body`          | `Snippet` | Main content area (fills available space)     |
| `headingBottom` | `Snippet` | Content rendered at the bottom of the card    |
