import { writeFileSync, statSync, readdirSync, readFileSync } from "fs";
import { siteConfig } from "../config/site";
import path from "path"

import type Registry from "./schema/registry.json";
import type RegistryItem from "./schema/registry-item.json";

const REGISTRY_ROOT = "src/lib/registry";
const OUTPUT = "registry.json";
const IGNORED_EXTENSIONS = [".test.ts", ".test.js"];

// Regex to match import statements
const IMPORT_REGEX = /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)\s*,?\s*)*\s*from\s*["']([^"']+)["']/g;

interface ParsedDependencies {
  registryDependencies: string[];
  dependencies: string[];
}

/**
 * Parses import statements from file content and categorizes them
 * - $lib/components/ui/* -> registryDependencies (extracts component name)
 * - npm packages (not starting with . or $) -> dependencies
 * - Excludes svelte/* imports
 */
function parseImports(fileContent: string): ParsedDependencies {
  const registryDependencies = new Set<string>();
  const dependencies = new Set<string>();

  let match;
  while ((match = IMPORT_REGEX.exec(fileContent)) !== null) {
    const importPath = match[1];

    // Skip svelte imports
    if (importPath.startsWith("svelte") || importPath === "svelte") {
      continue;
    }

    // Skip relative imports (internal component files)
    if (importPath.startsWith(".")) {
      continue;
    }

    // Check for $lib/components/ui/* imports -> registryDependencies
    if (importPath.startsWith("$lib/components/ui/")) {
      // Extract the component name from the path
      // e.g., "$lib/components/ui/button" -> "button"
      const parts = importPath.replace("$lib/components/ui/", "").split("/");
      const componentName = parts[0];
      if (componentName) {
        registryDependencies.add(componentName);
      }
      continue;
    }

    // Skip other $lib imports (utils, hooks, etc.)
    if (importPath.startsWith("$lib/") || importPath.startsWith("$app/")) {
      continue;
    }

    // Everything else is an npm dependency
    // Handle scoped packages (@org/package) and regular packages
    if (importPath.startsWith("@")) {
      // Scoped package: @org/package/subpath -> @org/package
      const parts = importPath.split("/");
      if (parts.length >= 2) {
        dependencies.add(`${parts[0]}/${parts[1]}`);
      }
    } else {
      // Regular package: package/subpath -> package
      const packageName = importPath.split("/")[0];
      if (packageName) {
        dependencies.add(packageName);
      }
    }
  }

  return {
    registryDependencies: Array.from(registryDependencies).sort(),
    dependencies: Array.from(dependencies).sort()
  };
}

/**
 * Parses all files in a component directory and aggregates dependencies
 */
function parseComponentDependencies(componentPath: string, files: string[]): ParsedDependencies {
  const allRegistryDeps = new Set<string>();
  const allDeps = new Set<string>();

  for (const file of files) {
    // Only parse .svelte and .ts files
    if (!file.endsWith(".svelte") && !file.endsWith(".ts")) {
      continue;
    }

    const filePath = path.join(componentPath, file);
    const content = readFileSync(filePath, "utf-8");
    const { registryDependencies, dependencies } = parseImports(content);

    registryDependencies.forEach(dep => allRegistryDeps.add(dep));
    dependencies.forEach(dep => allDeps.add(dep));
  }

  return {
    registryDependencies: Array.from(allRegistryDeps).sort(),
    dependencies: Array.from(allDeps).sort()
  };
}

const registry = {
  "$schema": "https://shadcn-svelte.com/schema/registry.json",
  "name": siteConfig.name,
  "homepage": siteConfig.url,
  "aliases": {
    "lib": "$lib",
    "components": "$lib/components",
    "utils": "$lib/utils/utils",
    "ui": "$lib/components/ui",
    "hooks": "$lib/hooks"
  },
  "items": discoverComponents()
};

function getMetaData(componentName: string) {
  return {
    "author": siteConfig.author,
    "version": siteConfig.version,
    "documentation": `${siteConfig.url}/components/${componentName}`,
    "repository": siteConfig.links.github
  }
}

function toTitle(componentName: string) {
  return componentName.split("-")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

function shouldIgnoreFile(file: string) {
  return IGNORED_EXTENSIONS.some(ext => file.endsWith(ext));
}

function discoverComponents() {
  const items = [];
  const categories = readdirSync(REGISTRY_ROOT);

  for (const category of categories) {
    const categoryPath = path.join(REGISTRY_ROOT, category)
    if (!statSync(categoryPath).isDirectory()) continue;

    const components = readdirSync(categoryPath);

    for (const component of components) {
      const componentPath = path.join(categoryPath, component);
      if (!statSync(componentPath).isDirectory()) continue;

      const componentFiles = [];

      const files = readdirSync(componentPath);

      for (const file of files) {
        if (shouldIgnoreFile(file)) continue;

        componentFiles.push({
          path: path.join(componentPath, file).replaceAll("\\", "/"),
          type: "registry:file",
          target: `ori/${component}/${file}`
        })
      }

      const dependencyFiles = files.filter(
        (file) => !shouldIgnoreFile(file) && (file.endsWith(".svelte") || file.endsWith(".ts"))
      )

      // Parse dependencies from component files
      const { registryDependencies, dependencies } = parseComponentDependencies(componentPath, dependencyFiles);

      items.push({
        name: component,
        type: "registry:block",
        title: toTitle(component),
        description: "",
        registryDependencies,
        dependencies,
        files: componentFiles,
        author: "Chirag Arora <arorachirag12005@gmail.com>",
        meta: getMetaData(component)
      })
    }
  }
  return items;
}

writeFileSync(
  OUTPUT,
  JSON.stringify(registry, null, 2),
  "utf-8"
);

console.log("registry.json generated successfully")
