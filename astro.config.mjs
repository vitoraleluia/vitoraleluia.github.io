// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vitoraleluia.com',
	integrations: [
		starlight({
			title: 'Vitor Aleluia',
			titleDelimiter: '-',
			description: 'Personal blog covering software engineering, systems architecture, and developer tooling.',
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Header: './src/components/Header.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeToggle.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/VitorAleluia' },
			],
			sidebar: [],
			pagefind: false,
			pagination: false,
			credits: false,
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: '/fonts/outfit-latin-400-normal.woff2',
						as: 'font',
						type: 'font/woff2',
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: '/fonts/outfit-latin-500-normal.woff2',
						as: 'font',
						type: 'font/woff2',
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: '/fonts/outfit-latin-700-normal.woff2',
						as: 'font',
						type: 'font/woff2',
						crossorigin: 'anonymous',
					},
				},
			],
		}),
	],
});
