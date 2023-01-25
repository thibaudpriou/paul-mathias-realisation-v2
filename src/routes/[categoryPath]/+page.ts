import type { Page } from "@sveltejs/kit";
import {categories} from "$config";

export function load(page: Page) {
    const {categoryPath} = page.params;
    const category = categories.find(c => c.path === categoryPath);
    if (!category) {
        throw new Error('category not found')
    }
    return { category };
}