import CodeCopyButton from "$lib/components/code-copy-button.svelte";
import { mount, unmount } from "svelte";
import type { Action } from "svelte/action";

export const codeCopyButton: Action = (node: HTMLElement) => {
	const blocks = node.querySelectorAll("pre.shiki");

	const instances = Array.from(blocks).map((block) => {
		const pre = block as HTMLElement;

		// Create a wrapper
		const wrapper = document.createElement("div");
		wrapper.className = "relative group";

		pre.parentNode?.insertBefore(wrapper, pre);
		wrapper.appendChild(pre);

		const code = pre.textContent ?? "";

		return mount(CodeCopyButton, {
			target: wrapper,
			props: {
				code
			}
		});
	});

	return {
		destroy() {
			instances.forEach((i) => unmount(i));
		}
	};
};
