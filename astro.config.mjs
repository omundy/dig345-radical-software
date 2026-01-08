/**
 * Config file for Astro/Starlight SSG. Other examples:
 * Astro/Starlight https://github.com/criticalwebdesign/wiki
 * Astro/Starlight https://github.com/omundy/game-dev-book
 * Astro https://github.com/omundy/camplajolla
 */

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx'
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/omundy/dig345-radical-software' }],
			editLink: {
				baseUrl: 'https://omundy.github.io/dig345-radical-software',
			},
			sidebar: [
				{ label: 'Home', link: './' },
				{
					label: 'Schedule',
					items: [ // Each item here is one entry in the navigation menu.
						{ label: 'Week 1 - Node.js, Jamstack', link: 'schedule#week-1' },
						{ label: 'Week 2 - Express APIs', link: 'schedule#week-2' },
						{ label: 'Week 3 - Sound & Music', link: 'schedule#week-3' },
						{ label: 'Week 4 - Reactivity', link: 'schedule#week-4' },
						{ label: 'Week 5 - Three.js', link: 'schedule#week-5' },
						{ label: 'Week 6 - Three.js', link: 'schedule#week-6' },
						{ label: 'Week 7 - Final Proposals', link: 'schedule#week-7' },
						{ label: 'Weeks 8-15 - Final Project', link: 'schedule#week-8' },
					],
				},
				{ label: 'Reference', autogenerate: { directory: 'reference' }, },
				{ label: 'Tutorials', autogenerate: { directory: 'tutorials' }, }, // autogenerate nav from files in folder
			],
			customCss: [
				'./src/styles/custom.css', // relative path to custom CSS file
				'./src/styles/global.css', // tailwind CSS 
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
			tailwindcss(),
		]
	},
});
