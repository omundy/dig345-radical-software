/**
 * Config file for Astro/Starlight SSG
 */

// @ts-check //-> enable static type checking by the TypeScript compiler

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

// Docs https://astro.build/config
export default defineConfig({
	// Github Pages configuration
	site: 'https://omundy.github.io',
	base: '/dig345-radical-software',
	integrations: [
		starlight({
			title: 'DIG 345 Radical Software',
			logo: {
				src: './public/images/simple-net-art-diagram/radical-software-icon.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/omundy/dig345-radical-software' }],
			editLink: {
				baseUrl: 'https://omundy.github.io/dig345-radical-software',
			},
			sidebar: [
				// add sidebar links directly 
				{ label: 'Syllabus', link: './' },
				{ label: 'Assignments', link: './assignments' },

				// autogenerate sidebar links using folder/file names
				{ label: 'Schedule', autogenerate: { directory: 'schedule' }, },
				{ label: 'Tutorials', autogenerate: { directory: 'tutorials' }, },
			],
			customCss: [
				'./src/styles/custom.css', // relative path to custom CSS file
				'./src/styles/tailwind-overrides.css', // fixes for tailwind CSS 
			],
			components: {
				// override default Starlight components
				SiteTitle: './src/components/SiteTitle.astro',
			},
		}),
		svelte() // add svelte integration
	], 
	vite: {
		plugins: [
			// @ts-ignore //-> tell the compiler to suppress all errors from the following line
			tailwindcss()
		]
	},
});