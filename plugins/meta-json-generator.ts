import fs from "fs";
import path from "path";

type MetaJson = {
  createdAt: string;
};

export function metaJsonGenerator() {
  const REGISTRY_ROOT = path.resolve("src/lib/registry");

  function ensureMetaJson(dirPath: string, warn: (msg: string) => void) {
    const metaPath = path.join(dirPath, "meta.json");
    if (fs.existsSync(metaPath)) return;

    const stats = fs.statSync(dirPath);

    // Prefer birthtime (Windows/macOS)
    // Fallback to ctime (Linux)
    const createdAt =
        stats.birthtimeMs && stats.birthtimeMs > 0
            ? new Date(stats.birthtimeMs)
            : new Date(stats.ctimeMs);

    const meta: MetaJson = {
        createdAt: createdAt.toISOString(),
    };

    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
    warn(`meta.json created → ${dirPath}`);
    }


  function walk(dir: string, warn: (msg: string) => void) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const fullPath = path.join(dir, entry.name);

      const hasSubDirs = fs
        .readdirSync(fullPath, { withFileTypes: true })
        .some(e => e.isDirectory());

      if (!hasSubDirs) {
        ensureMetaJson(fullPath, warn);
      } else {
        walk(fullPath, warn);
      }
    }
  }

  return {
    name: "meta-json-generator",

    buildStart() {
        walk(REGISTRY_ROOT, console.warn);
    }
  };
}
