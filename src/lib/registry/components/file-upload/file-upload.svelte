<script lang="ts" module>
    import { cn } from "$lib/utils";

    export type FileUploadProps = {
        class?: string;
        accept?: string;
        multiple?: boolean;
        onFilesSelected?: (files: FileList) => void;
        description?: string;
    }
</script>

<script lang="ts">
    let {
        class: className = "",
        accept = "",
        multiple = false,
        onFilesSelected,
        description = "",
    }: FileUploadProps = $props();

    function handleFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && onFilesSelected) {
            onFilesSelected(input.files);
        }
    }
</script>

<div class={cn('border-1 border-dashed p-4', className)}>
	<input type="file" {accept} {multiple} onchange={handleFileChange} />
	<h2>Drag and drop files here</h2>
	{#if description}
		<p class="mt-2 text-sm text-muted-foreground">{description}</p>
	{/if}
</div>
