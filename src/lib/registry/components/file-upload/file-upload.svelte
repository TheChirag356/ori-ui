<script lang="ts" module>
    import { cn } from "$lib/utils";
    import { IconLoader, IconUpload, IconX, IconXboxXFilled } from '@tabler/icons-svelte';
	import { fly } from "svelte/transition";

    export type FileUploadProps = {
        class?: string;
        accept?: string;
        multiple?: boolean;
        onFileChange?: (files: File[]) => void;
        description?: string | {
            fileTypes?: string;
            maxFileSize?: string;
            maxFiles?: number;
        };
    }
</script>

<script lang="ts">
    import {onMount} from 'svelte';
	import { slide } from "svelte/transition";
    onMount(() => {
        const prevent = (e: DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
        }
        window.addEventListener('dragover', prevent)
        window.addEventListener('drop', prevent)

        return () => {
            window.removeEventListener('dragover', prevent)
            window.removeEventListener('drop', prevent)
        }
    })


    let {
        class: className = "",
        accept = "image/jpeg,image/png,image/gif",
        multiple = true,
        onFileChange,
        description = "You can upload 4 files. Each up to 2MB. Accepted JPEG, PNG, GIF.",
    }: FileUploadProps = $props();

    let inputFiles: File[] = $state([]);
    $effect(() => {
        console.log("Current files:", inputFiles);
    })

    let isPending = $state(false);
    let isDragActive = $state(false);

    function addFiles(files: FileList) {
        const newFiles = Array.from(files);
        inputFiles = [...inputFiles, ...newFiles];
        onFileChange?.(inputFiles);
    }


    function handleDragEnter(event: DragEvent) {
        event.preventDefault()
        isDragActive = true;
    }
    function handleDragOver(event: DragEvent) {
        event.preventDefault()
        isDragActive = true;
    }
    function handleDragLeave(event: DragEvent) {
        event.preventDefault()
        isDragActive = false;
    }
    function handleDrop(event: DragEvent) {
        isDragActive = false;
        if (!event.dataTransfer?.files?.length) return;

        addFiles(event.dataTransfer.files);
    }

    function handleFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (!input.files?.length) return;

        addFiles(input.files);
    }
    function handleFileDeletion(fileName: string) {
        inputFiles = inputFiles.filter(file => file.name !== fileName);
    }

</script>

<div class={cn('w-full flex flex-col items-center gap-4', className)}>
	<div
		class={cn(
			'border-foreground/50 border border-dashed relative p-4 rounded-sm flex justify-center items-center flex-col cursor-pointer transition-colors bg-muted-foreground/5 hover:bg-muted-foreground/10 ',
			{
				'border-primary/80': isDragActive
			}
		)}
		role="button"
		tabindex="0"
		ondragenter={handleDragEnter}
		ondragover={handleDragOver}
		ondragleave={handleDragLeave}
		ondrop={handleDrop}
		onkeydown={(e) => e.key === 'Enter' && e.currentTarget.click()}
	>
		<label
			ondragenter={(e: DragEvent) => e.stopPropagation()}
			ondragover={(e: DragEvent) => e.stopPropagation()}
			ondragleave={(e: DragEvent) => e.stopPropagation()}
			ondrop={(e: DragEvent) => e.stopPropagation()}
			class={cn(
				'dark:bg-input/10 flex w-full min-w-72 cursor-pointer flex-col items-center justify-center rounded-lg bg-transparent px-2 py-6 transition-colors',
				{
					'text-muted-foreground cursor-not-allowed': isPending,
					'opacity-0 pointer-events-none': isDragActive
				}
			)}
			in:fly={{ delay: 150, y: 20, duration: 300 }}
		>
			<div class="my-2">
				{#if isPending}
					<IconLoader className="size-6 animate-spin" />
				{:else}
					<IconUpload className="size-6" />
				{/if}
			</div>

			<div class="mt-3 space-y-1 text-center">
				<p class="text-sm font-semibold">Drag and drop files here</p>

				<p class="text-muted-foreground max-w-64 text-xs">
					{#if typeof description === 'string'}
						{description}
					{:else}
						{description?.maxFiles &&
							`You can upload ${description.maxFiles} file${description.maxFiles !== 1 ? 's' : ''}.`}{' '}
						{description?.maxFileSize &&
							`${description.maxFiles !== 1 ? 'Each u' : 'U'}p to ${description.maxFileSize}.`}{' '}
						{description?.fileTypes && `Accepted ${description.fileTypes}.`}
					{/if}
				</p>
			</div>

			<input
				type="file"
				{accept}
				{multiple}
				disabled={isPending}
				class="sr-only"
				onchange={handleFileChange}
			/>
		</label>

		{#if isDragActive}
			<div class="pointer-events-none absolute inset-0 rounded-lg">
				<div
					class="dark:bg-accent/40 bg-accent flex size-full flex-col items-center justify-center rounded-lg"
				>
					<div class="my-2">
						<IconUpload class="size-6" />
					</div>

					<p class="mt-3 text-sm font-semibold">Drop files here</p>
				</div>
			</div>
		{/if}
	</div>

	{#if inputFiles && inputFiles.length > 0}
		<div class="mt-4 w-full space-y-2">
			{#each inputFiles as file (file.name + file.size)}
				<div
					class="flex relative items-center justify-between rounded-md border bg-background px-3 py-2 text-sm"
					in:slide
					out:slide
				>
					<span class="truncate">{file.name}</span>
					<span class="text-muted-foreground text-xs">
						{Math.ceil(file.size / 1024)} KB
					</span>
					<IconXboxXFilled
						class="absolute rounded-md text-foreground -translate-y-1/2 top-0 right-0 size-4"
						role="button"
						onclick={() => handleFileDeletion(file.name)}
					/>
				</div>
			{/each}
		</div>
	{/if}
</div>
