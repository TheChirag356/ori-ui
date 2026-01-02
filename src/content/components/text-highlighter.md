---
title: Text Highlighter
description: A text highlighter that mimics the effect of a human-drawn marker stroke.
---

<script>
	import Highlighter from "$lib/registry/text-animations/text-highlighter/text-highlighter.svelte";
    import CodePreview from "$lib/components/code-preview.svelte";

	import {multiInstallScriptUtil} from "$lib/utils";
	import {MultiCodeBlock} from "$lib/registry/components/code-block"
	const scripts = multiInstallScriptUtil("text-highlighter");
</script>

<CodePreview>
<p>
	This is a 
	<Highlighter action="underline" color="#FF9800">
		magical
	</Highlighter>
	text example! It makes important <Highlighter class="text-black" action="highlight" color="#c56200">text stand out</Highlighter> in a unique way.
</p>
</CodePreview>

## Installation

<MultiCodeBlock code={scripts} />
