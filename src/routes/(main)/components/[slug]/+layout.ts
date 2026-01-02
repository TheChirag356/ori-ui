import { error } from "@sveltejs/kit"

const components = import.meta.glob('/src/content/components/*.md');

export async function load({ params }) {
    const slug = params.slug;
    const component = components[`/src/content/components/${slug}.md`];
    if (!component) {
        throw error(404, "Not found");
    }

    const newComponent: any = await component();
    return {
        content: newComponent.default,
        meta: newComponent.metadata,
    };
}

export const prerender = true;