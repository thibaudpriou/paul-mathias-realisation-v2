import adaptaterStatic from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        alias: {
            '$lib': 'src/lib',
            '$lib/*': 'src/lib/*',
            '$components': 'src/components',
            '$components/*': 'src/components/*',
            '$components': 'src/components',
            '$config': 'src/config',
        },
        adapter: adaptaterStatic({
            pages: "build",
            assets: "build",
            precompress: false,
            strict: true
        }),
        files: {
            assets: "static",
        },
        ...(process.env.NODE_ENV !== "development" && {
            // This is a hack for dev env (see https://github.com/sveltejs/kit/issues/1154)
            paths: {
                assets: "https://cdn.paul-mathias-realisation.com",
            },
        }),
    },
    preprocess: preprocess(),
};

export default config;