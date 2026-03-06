---
title: Shimmer Text
description: A shimmer text component.
---

<script lang="ts">
    import CodePreview from '$lib/components/code-preview.svelte';
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';

    import { ShimmerText } from "$lib/registry/text-animations/shimmer-text";
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("shimmer-text");
</script>

<CodePreview>
    <ShimmerText>
        Loading...
    </ShimmerText>
</CodePreview>
