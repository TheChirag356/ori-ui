<script lang="ts">
	import { cn } from "$lib/utils";
	import { createHighlighter } from "shiki";
	import { onMount } from "svelte";

	interface CodeBlockProps {
		class?: string;
		text: string;
		lang: string;
	}

	let {
		class: className = "",
		text = "",
		lang = ""
	}: CodeBlockProps = $props();

	let html = $state<string>("");

	let highlighter: any;

	onMount(async () => {
		// Create highlighter only once
		highlighter = await createHighlighter({
			themes: ["vitesse-dark"],
			langs: ["svelte", "javascript", "typescript", "bash", "html", "css"]
		});

		updateHtml();
	});

	$effect(() => {
		if (text) updateHtml();
	});

	async function updateHtml() {
		if (!highlighter) return;

		html = await highlighter.codeToHtml(text, {
			lang,
			theme: "vitesse-dark"
		});
	}
</script>

<div class={cn('border border-border rounded-md px-4 py-4', className)}>
	{html}
</div>
