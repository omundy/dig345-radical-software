/**
 * Config file for Astro/Starlight SSG
 */

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import relativeLinks from 'astro-relative-links'
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
	site: 'https://omundy.github.io',
	base: '/dig345-radical-software',
	integrations: [
		// relativeLinks(),
		starlight({
			title: 'DIG 345 Radical Software',
			logo: {
				src: './public/images/simple-net-art-diagram/simple-net-art-diagram-150w.png',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/omundy/dig345-radical-software' }],
			editLink: {
				baseUrl: 'https://omundy.github.io/dig345-radical-software',
			},
			sidebar: [
				{ label: 'Syllabus', link: './' },
				// { label: 'Syllabus', link: './syllabus' },
				{ label: 'Assignments', link: './assignments' },

				// autogenerate nav from files in folders
				{ label: 'Schedule', autogenerate: { directory: 'schedule' }, },
				{ label: 'Tutorials', autogenerate: { directory: 'tutorials' }, },
			],
			customCss: [
				'./src/styles/custom.css', // relative path to custom CSS file
				'./src/styles/tailwind-overrides.css', // fixes to tailwind CSS 
			],
			components: {
				// Override the default components
				SiteTitle: './src/components/SiteTitle.astro',
			},
		}),
	],
	vite: {
		plugins: [
			// @ts-ignore or as any
			tailwindcss()
		]
	},
});
