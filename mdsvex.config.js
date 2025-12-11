import { escapeSvelte } from "mdsvex";
import { createHighlighter } from "shiki"
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";


import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path_to_layout = join(__dirname, './src/content/mdsvex.svelte');

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
    extensions: [".md"],
    layout: {
        _: path_to_layout
    },
    highlight: {
        highlighter: async (code, lang = 'text') => {
            const highlighter = await createHighlighter({
                themes: ['poimandres'],
                langs: ['javascript', 'typescript', 'go', 'rust', 'c', 'python', 'cpp', 'bash', 'svelte'],
            })
            const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
            return `{@html \`${html}\` }`
        }
    },
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug],
    smartypants: true
}