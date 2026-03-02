---
title: Ribbon
description: A ribbon component that moves with scroll
---

<script>
    import Ribbon from '$lib/registry/components/ribbon/ribbon.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("ribbon");

    const ribbons = [
        {
        bgColor: "bg-primary",
        text: "Ori UI",
        rotate: "rotate-[6deg]",
        direction: -1, // 1 for left-to-right (or standard flow), -1 for right-to-left
        zIndex: "z-10",
        top: "top-0"
        },
        {
        bgColor: "bg-accent",
        text: "Shadcn Svelte",
        rotate: "rotate-[-6deg]",
        direction: 1, // 1 for left-to-right (or standard flow), -1 for right-to-left
        zIndex: "z-0",
        top: "top-0"
        },
    ];
</script>

<CodePreview>
    <Ribbon {ribbons}>Hello World</Ribbon> 
</CodePreview>

### Usage

```js
import Ribbon from '$lib/registry/components/ribbon/ribbon.svelte';
```

```svelte
<script lang="ts">
    const ribbons = [
        {
        bgColor: "bg-primary",
        text: "Ori UI",
        rotate: "rotate-[6deg]",
        direction: -1,
        zIndex: "z-10",
        top: "top-0"
        },
        {
        bgColor: "bg-accent",
        text: "Shadcn Svelte",
        rotate: "rotate-[-6deg]",
        direction: 1,
        zIndex: "z-0",
        top: "top-0"
        },
    ];
</script>
<Ribbon {ribbons}>Hello World</Ribbon>
```

### Props
| Prop    | Type           | Default | Description                                                                                     |
| ------- | -------------- | ------- | ----------------------------------------------------------------------------------------------- |
| ribbons | RibbonType[]   | []      | An array of ribbon objects, each containing properties for background color, text, rotation, etc. |
| class   | string         | ''      | Additional CSS classes for custom styling                                                        |

#### RibbonType Object Properties
| Property  | Type     | Description                                                                                     |
| --------- | -------- | ----------------------------------------------------------------------------------------------- |
| bgColor   | string   | Tailwind CSS class for background color (e.g., 'bg-primary', 'bg-red-500')                     |
| text      | string   | The text to display on the ribbon                                                                |
| rotate    | string   | Tailwind CSS class for rotation (e.g., 'rotate-6', 'rotate-[-6deg]')                            |
| direction | number   | Direction of movement: 1 for left-to-right, -1 for right-to-left                                  |
| zIndex    | string   | Tailwind CSS class for z-index (e.g., 'z-10', 'z-0')                                               |
| top       | string   | Tailwind CSS class for top positioning (e.g., 'top-0', 'top-4')                                         |
