# [pathforwardpharmacology.com](https://www.pathforwardpharmacology.com)

Official website for **PathForward Pharmacology** — a boutique consulting firm led by a senior pharmacologist with 20+ years at Novartis. Built with [Astro](https://astro.build/).

## Editing Content

Editing a page is simple:

1. **Find the file** that backs the page you want to edit.  
   For example, to edit `pathforwardpharmacology.com/services`, open `src/pages/services.mdx`.  
   (Not all files end in `.mdx`; `.md` and `.astro` are also used.)

2. **Open it in your editor** (VS Code recommended) and make changes.  
   See this handy guide for Markdown: https://www.markdownguide.org/  
   Astro files (`.astro`) are HTML-like with JSX-style templating when needed.

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
