/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["futura-pt", "sans-serif"]
      },
      colors: {
        primary: {
          light: "#ff646a",
          DEFAULT: "#d22f40",
          dark: "#990019",
        },
        secondary: {
          light: "#ffef66",
          DEFAULT: "#fdbd32",
          dark: "#c58d00"
        },
        tertiary: {
          light: "#c9d67e",
          DEFAULT: "#97a550",
          dark: "#677623"
        },
        quaternary: {
          light: "#92f3ee",
          DEFAULT: "#5ec0bc",
          dark: "#248f8c"
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
