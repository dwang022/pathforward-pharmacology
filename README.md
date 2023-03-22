# [ucladatares.com](https://www.ucladatares.com)

Official DataRes club website. Powered by [astrojs](https://astro.build/)!

## Editing Content

Editing the content of an individual page is simple, following these steps:

1. Find the relevant file for the page you want to edit: for instance, if you want to edit `ucladatares.com/teams/research.html`, then the associated file is `src/pages/teams/research.mdx`. Note that not all files will end in `.mdx`, `.md` or `.astro` are also valid options.
2. Open the file you found in your favorite plain text editor. (vscode is probably easiest), and edit the content.
   [Here's](https://www.markdownguide.org/) a useful guide for Markdown (`.md` and `.mdx` files). Astro files are an extension of HTML that use JSX-like syntax, which allows for more customization than Markdown offers, but with less easy-to-read content.
3. Test your changes locally with `npm start`. Note that you may need to run `npm install` first in order to install dependencies. To run `npm` you must have [NodeJS](https://nodejs.org/en/) installed.
4. Push your changes with `git`.

For more explicit details on how the website works, see below.

## Project Structure

```
/
├───public
└───src
    ├───components
    ├───images
    ├───layouts
    └───pages
```

### public/

Static assets, not including progressive images, should be placed here.

### src/components/

Single file components are stored here, for use in layouts and pages.

### src/images/

Progressive images are stored here. Load them using either the `<Image>` or `<Picture>` tag from `""@astrojs/image/components"`.

### src/layouts/

Page layout templates are stored here. Almost every page should be able to use `SimpleLayout.astro`, but if implementing a new layout, make sure to incorporate `BaseLayout.astro` to avoid duplicating boilerplate.

### src/pages/

`.astro`, `.md`, and `.mdx` files here are automatically rendered to pages on the final website by Astro. For ease of future editing, prioritize using the simplest format, only upgrading to a more expressive format if explicitly necessary. (ie. `.md`, then `.mdx`, then `.astro`).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Why Astro?

- **Simple**: Fundamentally, this is a super simple website. Using any fancy "Web 2.0" framework like React or Vue is overkill for our needs.
- **SEO**: In total, we use less than 2kB of JavaScript to run this website. This means web crawlers without JS enabled can still see the data of the website, and promote our search results.
- **Easy Editing**: By utilizing markdown templates, editing the content of pages, or adding new pages is as simple as writing a markdown file.
