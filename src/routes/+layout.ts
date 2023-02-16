import type { Page } from "@sveltejs/kit";

export const prerender = true;
export const trailingSlash = 'always';

export function load(page: Page) {
    const pathname = page.url.pathname
    if (pathname[pathname.length - 1] === '/') {
        // trim trailing slash
        return { segment: pathname.substring(0, pathname.length - 1) }
    }

    return { segment: page.url.pathname };
}