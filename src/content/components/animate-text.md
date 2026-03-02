---
title: Animate Text
description: A text animation action that animates text using a variety of different animations.
---

<script>
    import { blurIn } from "$lib/registry/text-animations/animate-text";
    import CodePreview from '$lib/components/code-preview.svelte';
    
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("animate-text");
</script>

<CodePreview>
    <h1 use:blurIn={{duration:1}}>Animated Text</h1>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

#### Blur In Animation by Character

<CodePreview>
    <h1 use:blurIn={{by:"character",stagger:0.04}}>
    Animated Text
    </h1>
</CodePreview>

#### Blur In Animation by Word

<CodePreview>
    <h1 use:blurIn={{by:"word",duration:1,stagger:0.2}}>
    Word by word blur in
    </h1>
</CodePreview>
