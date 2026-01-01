import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

import { siteConfig } from "$lib/config/site";

export function multiInstallScriptUtil(slug: string) {
	const scripts = [
		{
			name: "bun",
			text: `bun x shadcn-svelte add ${siteConfig.url}/r/${slug}.json`,
			lang: "bash"
		},
		{
			name: "npm",
			text: `npx shadcn-svelte@latest add ${siteConfig.url}/r/${slug}.json`,
			lang: "bash"
		},
		{
			name: "yarn",
			text: `yarn dlx shadcn-svelte@latest add ${siteConfig.url}/r/${slug}.json`,
			lang: "bash"
		},
		{
			name: "pnpm",
			text: `pnpm dlx shadcn-svelte@latest add ${siteConfig.url}/r/${slug}.json`,
			lang: "bash"
		}
	]

	return scripts;
}