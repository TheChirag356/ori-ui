---
title: Shimmer Button
description: A button with a shimmering light which travels around the perimeter.
---

<script>
    import { CodeBlock } from "$lib/registry/components/code-block";
</script>

# Installation

<CodeBlock text="bun x shadcn-svelte@latest add @ori/shimmer-button" lang="bash" />

# Usage

<CodeBlock text="import {ShimmerButton} from '$lib/components/shimmer-button';" lang="svelte" />

<CodeBlock text="<ShimmerButton>Shimmer Button</ShimmerButton>" lang="svelte" />

# Props

| Prop         | Type     | Default         | Description                  |
| ------------ | -------- | --------------- | ---------------------------- |
| `background` | `string` | `rgba(0,0,0,1)` | The background of the button |
| `className`  | `string` | `""`            | The classes of the button    |
| `children`   | `any`    | `undefined`     | The children of the button   |
