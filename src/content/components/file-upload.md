---
title: File Upload
description: A minimal file upload form with background grid, drag and drop, and micro interactions.
---

<script>
    import FileUpload from '$lib/registry/components/file-upload/file-upload.svelte';
    import CodePreview from '$lib/components/code-preview.svelte';

    import MultiCodeBlock from '$lib/registry/components/code-block/multi-code-block.svelte';
    import { multiInstallScriptUtil} from "$lib/utils";
    const scripts = multiInstallScriptUtil("file-upload");
</script>

<CodePreview>
    <FileUpload />
</CodePreview>

### Installation

<MultiCodeBlock code={scripts} />

### Usage

```js
import { FileUpload } from '$lib/components/ori/file-upload';
```

```svelte
<FileUpload />
```

### Props

| Prop         | Type                      | Default                                                            | Description                                                                                                                           |
| ------------ | ------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| class        | `string`                  | ''                                                                 | Additional CSS classes for custom styling                                                                                             |
| accept       | `string`                  | 'image/jpeg,image/png,image/gif'                                   | The accepted file types                                                                                                               |
| multiple     | `boolean`                 | true                                                               | Whether multiple files can be uploaded                                                                                                |
| onFileChange | `(files: File[]) => void` | undefined                                                          | Callback function that is called when files are changed                                                                               |
| description  | `string`                  | 'You can upload 4 files. Each up to 2MB. Accepted JPEG, PNG, GIF.' | Description of the file upload component. It can be a string or an object with `fileTypes`, `maxFileSize`, and `maxFiles` properties. |

#### Description Props

| Prop        | Type     | Default                          | Description                 |
| ----------- | -------- | -------------------------------- | --------------------------- |
| fileTypes   | `string` | 'image/jpeg,image/png,image/gif' | The accepted file types     | 
| maxFileSize | `string` | '2MB'                            | The maximum file size       |
| maxFiles    | `number` | 4                                | The maximum number of files |
