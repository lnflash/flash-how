import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

    kit: {
        adapter: adapter({
            out: 'build'
        })
    }
};

export default config;
