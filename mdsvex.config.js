import { escapeSvelte } from "mdsvex";
import { bundledLanguages, bundledThemes, createHighlighter } from "shiki"
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";


import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path_to_layout = join(__dirname, './src/content/mdsvex.svelte');

// use the single highlighter instance for better performance
const shiki = await createHighlighter({
    themes: Object.keys(bundledThemes),
    langs: Object.keys(bundledLanguages),
})

async function highlighter(code, lang = "javascript") {
    const html = escapeSvelte(shiki.codeToHtml(code, { lang, theme: 'vitesse-dark' }))
    return `{@html \`${html}\` }`
}

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
    extensions: [".md"],
    layout: {
        _: path_to_layout
    },
    highlight: {
        highlighter
    },
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug],
    smartypants: true
}