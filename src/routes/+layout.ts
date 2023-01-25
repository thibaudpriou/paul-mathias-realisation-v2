import type { Page } from "@sveltejs/kit";

export const prerender = true;
export const trailingSlash = 'always';

export function load(page: Page) {
    return {segment: page.url.pathname};
}