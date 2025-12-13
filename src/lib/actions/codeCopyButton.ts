import CodeCopyButton from "$lib/components/code-copy-button.svelte";
import { mount, unmount } from "svelte";

export function codeCopyButton(node: HTMLElement) {
	const blocks = node.querySelectorAll(".shiki");

	const instances = Array.from(blocks).map((block) => {
		(block as HTMLElement).style.position ||= "relative";

		return mount(CodeCopyButton, {
			target: block as HTMLElement,
			props: {
				code: block.querySelector("code")?.textContent ?? ""
			}
		});
	});

	return {
		destroy() {
			instances.forEach((i) => unmount(i));
		}
	};
}
