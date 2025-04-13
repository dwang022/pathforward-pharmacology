import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ucladatares.com",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  image: {
    // Enable support for optimizing images
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
