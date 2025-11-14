---
title: Astro Starlight 
description: Install and learn the basics of Astro and Starlight
---

## 🚀 About






## Install Astro Starlight 

1. Create a new folder in the Finder / Explorer
1. Drag the folder into VS Code
1. Run the following in a VS Code Terminal to start the install
```
npm create astro@latest -- --template starlight
```
4. When asked: "Where should we create your new project?" => Type `./` and return
1. When asked: "Install dependencies?"  => Type `Yes` and return
1. Once finished, run the development server and find your new site at: http://localhost:4321
```
npm run dev
```









## 👉 Review project structure

Inside your Astro + Starlight project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
└── package.json
```

1. `src/content/docs/` - Starlight will publish all `.md` and `.mdx` files in this directory to the web using its directory and filename (e.g. `guides/example`)
1. `src/assets/`- Place images here then embed them in Markdown with a relative link.
1. `public/` - This directory is for static assets, like favicons.
1. `astro.config.mjs` - The Astro config file
1. `package.json` - This file contains your project dependencies as well as a list of commands for testing and building Astro. 
   - `npm install` - Installs dependencies                         
   - `npm run dev` - Starts local dev server at `localhost:4321`     
   - `npm run build` - Build your production site to `./dist/`         
   - `npm run preview` - Preview your build locally, before deploying 







## 👉 Publish Astro to Github Pages

1. In VS Code, right click the empty area in your Explorer below the project files and choose New File... Paste the following path to auto-create the folders and directories for the deploy file: `.github/workflows/deploy.yml` (and can also make these individually). Don't forget the perio in front of "github".
1. Paste the YAML code from https://docs.astro.build/en/guides/deploy/github/ into this new file <!-- also contains these instructions -->
1. In Github Desktop, commit your work and push it to a new repository on Github. Leave it public.
2. Open the repo web page **Github Desktop > Repository > View on Github**. Click Settings > Pages. Choose GitHub Actions as the Source of your site.
3. In VS Code, open `astro.config.mjs`
   1. Set `site` to the GitHub URL of your deployed site. For example my username is `omundy`
   1. Set `base` to the name of your repo. For example my repo is `dig345-radical-software`

```mjs
export default defineConfig({
  site: 'https://omundy.github.io',
  base: '/dig345-radical-software',
  ...
})
```






## More Articles

- [A Complete Guide to Build a Documentation Site with Astro Starlight](https://dev.to/warish/a-complete-guide-to-build-a-documentation-site-with-astro-starlight-1cp9) (2024)
- Similar projects: https://vitepress.dev/






## References


Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build)



[Astro](https://astro.build/) is a JS web framework for static or dynamic websites
[Starlight](https://starlight.astro.build/)

### Example Astro sites

- https://criticalwebdesign.github.io/wiki/ (Starlight)
- https://github.com/omundy/game-dev-book (Starlight)
- https://omundy.github.io/camplajolla/







https://diataxis.fr/reference/



