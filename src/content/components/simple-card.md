---
title: Simple Card
description: A simple card component with a title, description, and content area.
---

<script lang="ts">
    import CodePreview from '$lib/components/code-preview.svelte';
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';

    import { Card } from '$lib/registry/components/card';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("simple-card");

    import 
</script>

<CodePreview>
    <SimpleCardPreview />
</CodePreview>
