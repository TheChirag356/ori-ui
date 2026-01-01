import { redirect } from "@sveltejs/kit";
import { SidebarComponentData } from "$lib/data/sidebar-component-data.generated"

export async function load() {
    redirect(303, `${SidebarComponentData[0].items[0].url}`);
}