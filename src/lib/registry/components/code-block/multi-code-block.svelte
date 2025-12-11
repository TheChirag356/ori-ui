<script lang="ts">
	import { cn } from "$lib/utils";
	import { createHighlighter } from "shiki";
	import { onMount } from "svelte";

	type Code = {
		name: string;
		text: string;
		lang: string;
	};

	interface CodeBlockProps {
		class?: string;
		code?: Code[];
	}

	let selectedTab = $state(0);

	let {
		class: className = "",
		code = []
	}: CodeBlockProps = $props();

	// holds generated HTML
	let html = $state<string>("");

	// Load initial code block
	onMount(() => {
		updateHtml();
	});

	// Update HTML whenever selectedTab changes
	$effect(() => {if (code.length > 0) updateHtml()});

	async function updateHtml() {
        const highlighter = await createHighlighter({
            themes: ['vitesse-dark'],
            langs: ['javascript'],
        });

		html = await highlighter.codeToHtml(code[selectedTab].text, {
			lang: code[selectedTab].lang,
			theme: "vitesse-dark"
		});
	}
</script>

<div class={cn('border border-border rounded-md', className)}>
	<div class="flex gap-3 bg-muted/30 rounded-t-md">
		{#each code as lang, index}
			<button
				class={cn(
					'h-full font-medium relative py-3 px-4 overflow-hidden',
					selectedTab === index
						? 'border-b-primary border-b text-accent-foreground'
						: 'text-muted-foreground hover:bg-accent/10'
				)}
				onclick={() => (selectedTab = index)}
			>
				<span>{lang.name}</span>
				{#if selectedTab === index}
					<span class="absolute bottom-0 left-0 w-full h-1 blur-md bg-primary"></span>
				{/if}
			</button>
		{/each}
	</div>

	<div class="px-4 py-4">
		{@html html}
	</div>
</div>
