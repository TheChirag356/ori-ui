// vite/plugins/sidebar-generator.ts
import fs from "fs";
import path from "path";

const ONE_MONTH_MS = 10 * 24 * 60 * 60 * 1000;

function isOlderThanOneMonth(dirPath: string): boolean {
    const stats = fs.statSync(dirPath);

    // birthtime = creation time (works on Windows & macOS)
    // fallback to ctime if birthtime is not reliable
    const createdAt = stats.birthtimeMs || stats.ctimeMs;

    return Date.now() - createdAt < ONE_MONTH_MS;
}

function returnTitle(name: string) {
    return name
        .split("-")
        .map(w => w[0].toUpperCase() + w.slice(1))
        .join(" ");
}

export function sidebarGenerator() {
    return {
        name: "sidebar-generator",
        buildStart() {
            const registryDir = path.resolve("src/lib/registry");

            const readDir = (dir: string, baseUrl: string) =>
                fs
                    .readdirSync(dir, { withFileTypes: true })
                    .filter(d => d.isDirectory())
                    .map(d => {
                        const fullPath = path.join(dir, d.name);
                        const showBadge = isOlderThanOneMonth(fullPath);

                        return {
                            title: returnTitle(d.name),
                            url: (path.join(baseUrl, d.name)).replace(/\\/g, "/"),
                            ...(showBadge && { badge: "New" })
                        }
                    });

            const sidebar = [
                {
                    title: "Components",
                    url: "/components",
                    items: readDir(path.join(registryDir, "components"), "/components")
                },
                {
                    title: "Buttons",
                    url: "/components/buttons",
                    items: readDir(path.join(registryDir, "buttons"), "/components")
                },
                {
                    title: "Text Animations",
                    url: "/components",
                    items: readDir(
                        path.join(registryDir, "text-animations"),
                        "/components"
                    )
                }
            ];

            const outputPath = path.resolve(
                "src/lib/data/sidebar-component-data.generated.ts"
            );

            // Ensure the directory exists (fixes Vercel deployment)
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });

            fs.writeFileSync(
                outputPath,
                `export const SidebarComponentData = ${JSON.stringify(sidebar, null, 2)};`
            );
        }
    };
}
