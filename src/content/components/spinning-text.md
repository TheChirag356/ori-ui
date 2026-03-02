---
title: Spinning Text
description: The Spinning Text component animates text in a circular motion with customizable speed, direction, color, and transitions for dynamic and engaging effects.
---

<script>
    import SpinningText from "$lib/registry/text-animations/spinning-text/spinning-text.svelte";
    import CodePreview from "$lib/components/code-preview.svelte";

</script>

<CodePreview>
    <SpinningText
  text="learn more • earn more • grow more • "
  radius={100}
  speed={10}
  class="text-sm font-semibold text-neutral-300"
/>
</CodePreview>
