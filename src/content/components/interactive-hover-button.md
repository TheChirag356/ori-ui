---
title: Interactive Hover Button
description: A button with an interactive hover effect where an expanding circle fills the button and an arrow slides in.
---

<script>
    import InteractiveHoverButton from '$lib/registry/buttons/interactive-hover-button/interactive-hover-button.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("interactive-hover-button");
</script>

<CodePreview>
    <InteractiveHoverButton class="px-8 py-3 rounded-full bg-background border">
        Hover Me
    </InteractiveHoverButton>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import InteractiveHoverButton from '$lib/registry/buttons/interactive-hover-button/interactive-hover-button.svelte';
```

```svelte
<InteractiveHoverButton class="px-8 py-3 rounded-full bg-background border">
	Click Me
</InteractiveHoverButton>
```

### Props

| Prop           | Type   | Default                    | Description                               |
| -------------- | ------ | -------------------------- | ----------------------------------------- |
| class          | string | `''`                       | Additional CSS classes for custom styling |
| role           | string | `'button'`                 | The ARIA role of the element              |
| hoverColor     | string | `'hsl(var(--foreground))'` | Background color of the expanding circle  |
| textColor      | string | `'hsl(var(--foreground))'` | Text color in default state               |
| hoverTextColor | string | `'hsl(var(--background))'` | Text color on hover                       |
| duration       | number | `400`                      | Animation duration in milliseconds        |

### Examples

#### Custom Colors

<CodePreview>
    <InteractiveHoverButton 
        class="px-8 py-3 rounded-full bg-background border"
        hoverColor="#3b82f6"
        hoverTextColor="#ffffff"
    >
        Blue Accent
    </InteractiveHoverButton>
</CodePreview>

#### Slower Animation

<CodePreview>
    <InteractiveHoverButton 
        class="px-8 py-3 rounded-lg bg-background border"
        duration={600}
    >
        Slow Motion
    </InteractiveHoverButton>
</CodePreview>
