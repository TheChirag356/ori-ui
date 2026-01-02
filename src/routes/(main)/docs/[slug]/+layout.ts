import { error } from "@sveltejs/kit"

const docs = import.meta.glob('/src/content/docs/*.md');

export async function load({ params }) {
    const slug = params.slug;
    const doc = docs[`/src/content/docs/${slug}.md`];
    if (!doc) {
        throw error(404, "Not found");
    }

    const newDoc: any = await doc();
    return {
        content: newDoc.default,
        meta: newDoc.metadata,
    };
}