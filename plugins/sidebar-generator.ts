import fs from "fs";
import path from "path";

const ONE_MONTH_MS = 5 * 24 * 60 * 60 * 1000;

type MetaJson = {
  createdAt?: string;
};

function readMeta(dirPath: string): MetaJson | null {
  const metaPath = path.join(dirPath, "meta.json");
  if (!fs.existsSync(metaPath)) return null;

  try {
    return JSON.parse(fs.readFileSync(metaPath, "utf-8"));
  } catch {
    return null;
  }
}

function isNew(dirPath: string): boolean {
  const meta = readMeta(dirPath);
  if (!meta?.createdAt) return false;

  const createdAt = new Date(meta.createdAt).getTime();
  if (Number.isNaN(createdAt)) return false;

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
            const showBadge = isNew(fullPath);

            return {
              title: returnTitle(d.name),
              url: path.join(baseUrl, d.name).replace(/\\/g, "/"),
              ...(showBadge && { badge: "New" }),
            };
          });

      const sidebar = [
        {
          title: "Components",
          url: "/components",
          items: readDir(
            path.join(registryDir, "components"),
            "/components"
          ),
        },
        {
          title: "Buttons",
          url: "/components/buttons",
          items: readDir(
            path.join(registryDir, "buttons"),
            "/components"
          ),
        },
        {
          title: "Text Animations",
          url: "/components",
          items: readDir(
            path.join(registryDir, "text-animations"),
            "/components"
          ),
        },
      ];

      const outputPath = path.resolve(
        "src/lib/data/sidebar-component-data.generated.ts"
      );

      fs.mkdirSync(path.dirname(outputPath), { recursive: true });

      fs.writeFileSync(
        outputPath,
        `export const SidebarComponentData = ${JSON.stringify(
          sidebar,
          null,
          2
        )};`
      );
    },
  };
}
