// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://omundy.github.io',
    base: '/dig345-radical-software',
	integrations: [
		starlight({
			title: 'DIG 345 Radical Software',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            editLink: {
                baseUrl: 'https://omundy.github.io/dig345-radical-software',
            },
			sidebar: [
                {
                    label: 'Home', link: './'
                },
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' }, // autogenerate nav
				},
			],
            customCss: [
                './src/styles/custom.css', // relative path to custom CSS file
            ],
		}),
	],
});
