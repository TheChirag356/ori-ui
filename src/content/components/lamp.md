---
title: Lamp
description: A lamp effect as seen on linear, great for section headers.
---

<script lang="ts">
    import CodePreview from '$lib/components/code-preview.svelte';
    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';

    import { Lamp } from '$lib/registry/components/lamp';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("lamp");
</script>

<CodePreview class="flex flex-col gap-4">
    <Lamp />
    <Lamp
        glowClass="bg-[#46aec5]"
        lineClass="bg-[#46aec5]"
    >
	<h1 class="text-5xl font-bold text-white">
		Build lamps the right way
	</h1>
</Lamp>
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```ts
import { Lamp } from '$lib/components/ori/lamp';
```

```svelte
<Lamp />
```

### Examples

#### Default

```svelte
<Lamp>
	<h2 class="text-4xl font-semibold">
		Beautiful section headers
	</h2>
</Lamp>
```

#### Custom Colors

You can customize the glow and line colors using `glowClass` and `lineClass`.

```svelte
<Lamp
	glowClass="bg-purple-500"
	lineClass="bg-purple-500"
>
	<h2 class="text-4xl font-semibold text-white">
		Purple Glow
	</h2>
</Lamp>
```

#### Subtle Variant

```svelte
<Lamp
	glowClass="bg-accent/40"
	lineClass="bg-accent/60"
>
	<h2 class="text-3xl font-medium">
		Subtle Lamp
	</h2>
</Lamp>
```

### Props

| Prop        | Type      | Default       | Description |
|------------|-----------|--------------|------------|
| `class`     | `string`  | —            | Additional classes for the root container |
| `glowClass` | `string`  | `bg-accent`  | Tailwind class for the glow color |
| `lineClass` | `string`  | `bg-accent`  | Tailwind class for the horizontal line |
| `children`  | `Snippet` | —            | Content rendered inside the lamp |
