---
title: Code Block
description: A beautiful syntax-highlighted code block with tabbed multi-file support and copy functionality.
---

<script>
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    let code = [{
        name: 'index.ts',
            text: 'console.log("Hello World");',
            lang: 'typescript'
        }]

    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("code-block");
</script>

<CodePreview>
    <MultiCodeBlock 
        class="w-full"
        code={code}
    />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
```

```svelte
<MultiCodeBlock
	code={[
		{ name: 'App.svelte', text: '<h1>Hello World</h1>', lang: 'svelte' },
		{ name: 'utils.ts', text: 'export const greet = () => "Hello";', lang: 'typescript' }
	]}
/>
```

### Props

| Prop  | Type   | Default | Description                                     |
| ----- | ------ | ------- | ----------------------------------------------- |
| code  | Code[] | `[]`    | Array of code objects with name, text, and lang |
| class | string | `''`    | Additional CSS classes for custom styling       |

### Code Object

| Property | Type   | Description                                                                       |
| -------- | ------ | --------------------------------------------------------------------------------- |
| name     | string | The tab name displayed at the top (e.g., filename)                                |
| text     | string | The code content to be syntax highlighted                                         |
| lang     | string | The language for syntax highlighting (e.g., 'svelte', 'typescript', 'javascript') |

### Features

- **Tabbed Interface**: Switch between multiple code files with a sleek tab design
- **Syntax Highlighting**: Powered by [Shiki](https://shiki.style/) with the `vitesse-dark` theme
- **Copy Button**: Built-in copy functionality for easy code sharing
- **Responsive**: Handles overflow gracefully with horizontal scrolling
