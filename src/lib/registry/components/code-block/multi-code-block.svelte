<script lang="ts">
	import { cn } from "$lib/utils";
	import { codeToHtml } from "shiki";
	import CopyButton from "$lib/registry/buttons/copy-button/copy-button.svelte";
	import { fly } from "svelte/transition";

	type Code = {
		name: string;
		text: string;
		lang: string;
	};

	interface CodeBlockProps {
		class?: string;
		code?: Code[];
	}

	let {
		class: className = "",
		code = []
	}: CodeBlockProps = $props();
	
	// holds generated HTML
	let html = $state("");
	let selectedTab = $state(0);

	$effect(() => {
		if (!code.length) return;

		updateCode(code[selectedTab]).then((newCode) => {
			html = newCode;
		});
	});

	async function updateCode(code: Code) {
		const newCode = await codeToHtml(code.text, {
			lang: code.lang,
			theme: 'vitesse-dark'
		})
		const match = newCode.match(/<code[^>]*>[\s\S]*?<\/code>/); // strips the surrounding <pre> tags
		return match?.[0] ?? newCode;
	}
</script>

<div class={cn('border relative border-border rounded-md overflow-x-hidden', className)}>
	<div class="flex justify-between items-center bg-muted/30 rounded-t-md pr-4">
		<div class="flex gap-3">
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
		<CopyButton variant="ghost" content={code[selectedTab].text} />
	</div>

	{#key selectedTab}
		<div class="absolute px-4 py-4 border-none" in:fly={{ x: 100 }} out:fly={{ x: -100 }}>
			{@html html}
		</div>
	{/key}
	<div class="invisible px-4 py-4 border-none" in:fly={{ x: -100 }} out:fly={{ x: 100 }}>
		{@html html}
	</div>
</div>
