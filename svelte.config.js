import adaptaterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adaptaterStatic({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte',
		paths: {
			// assets:"https://cdn.demo.paul-mathias-realisation.com"
		}
	},
	preprocess: preprocess()
};

export default config;