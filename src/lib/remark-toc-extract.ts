import type { Root } from "mdast";
import type { VFile } from "vfile";
import { toc } from "mdast-util-toc";

export function remarkExtractToc() {
	return (tree: Root, file: VFile) => {
		const result = toc(tree);

		if (result.map) {
			// Attach TOC to frontmatter-like data
			file.data.fm = {
				...(file.data.fm || {}),
				toc: result.map
			};
		}
	};
}
