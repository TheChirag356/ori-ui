import { redirect } from "@sveltejs/kit";

export async function load() {
    redirect(303, "/components/shimmer-button");
}