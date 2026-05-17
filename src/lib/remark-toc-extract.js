import { toc } from "mdast-util-toc";

/**
 * @returns {(tree: import('mdast').Root, file: import('vfile').VFile) => void}
 */
export function remarkExtractToc() {
	return (tree, file) => {
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
