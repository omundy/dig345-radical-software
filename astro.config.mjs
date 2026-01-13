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
				{ label: 'Schedule', link: './' },
				{ label: 'Syllabus', link: './syllabus' },
				{ label: 'Assignments', link: './assignments' },

				// {
				// 	label: 'Schedule',
				// 	items: [ // Each item here is one entry in the navigation menu.
				// 		{ label: 'Course Overview', link: 'schedule' },
				// 		{ label: 'Week 1 - Node.js, Jamstack', link: 'schedule#1-1-nodejs' },
				// 		{ label: 'Week 2 - Express APIs', link: 'schedule#2-1-astrojs' },
				// 		{ label: 'Week 3 - Databases', link: 'schedule#3-1-databases' },
				// 		{ label: 'Week 4 - Reactivity', link: 'schedule#4-1-reactivity' },
				// 		{ label: 'Week 5 - Sound & Music', link: 'schedule#5-1' },
				// 		{ label: 'Week 6 - Three.js', link: 'schedule#6-1-threejs' },
				// 		{ label: 'Week 7 - Final Proposals', link: 'schedule#7-1' },
				// 		{ label: 'Week 8-15 - Final Project', link: 'schedule#8-1' },
				// 	],
				// },
				// { label: 'Reference', autogenerate: { directory: 'reference' }, },
				
				{ label: 'Tutorials', autogenerate: { directory: 'tutorials' }, }, // autogenerate nav from files in folder
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
