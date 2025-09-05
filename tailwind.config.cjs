/** @type {import('tailwindcss').Config} */
// tailwind.config.cjs
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",   // brand-500
          50:  "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e"
        },
        accent: {
          500: "#22c55e",
          700: "#15803d"
        },
        ink: {
          700: "#0f172a", // headings
          600: "#1f2937", // body strong
          500: "#334155", // body
          300: "#cbd5e1"  // borders
        }
      },
      fontFamily: {
        display: ['"Inter var"', "Inter", "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "ui-serif", "Georgia", "serif"]
      },
      borderRadius: {
        xl2: "1rem",
        pill: "9999px"
      },
      boxShadow: {
        lift: "0 10px 30px rgba(2, 132, 199, 0.15)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"),]
}
