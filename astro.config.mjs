// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vitoraleluia.com',
	integrations: [
		starlight({
			title: 'Vitor Aleluia',
			description: 'Personal blog covering software engineering, systems architecture, and developer tooling.',
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Header: './src/components/Header.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/VitorAleluia' },
			],
			sidebar: [],
			pagefind: false,
			pagination: false,
			credits: false,
		}),
	],
});
