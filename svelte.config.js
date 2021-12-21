import adaptaterStatic from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adaptaterStatic({
            pages: "build",
            assets: "build",
            fallback: null,
        }),
        target: "#svelte",
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
