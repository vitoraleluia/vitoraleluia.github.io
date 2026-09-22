// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://vitoraleluia.com',
	integrations: [
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
		}),
	],
	prefetch: false,
	markdown: {
		shikiConfig: {
			themes: {
				light: 'catppuccin-latte',
				dark: 'catppuccin-mocha',
			},
			defaultColor: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
