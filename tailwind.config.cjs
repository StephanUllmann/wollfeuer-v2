/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "barley-corn": {
          50: "#f6f5f0",
          100: "#e9e4d8",
          200: "#d4cbb4",
          300: "#bbab89",
          400: "#a89167",
          500: "#9d835c",
          600: "#83684b",
          700: "#6a513e",
          800: "#5a4539",
          900: "#4f3d34",
          950: "#2c201c",
        },
      },
      fontFamily: {
        display: "JosefinSlab",
        body: "Playfair",
      },
      backgroundImage: {
        brown:
          "linear-gradient(285deg,hsl(34deg 26% 49%) 0%,hsl(34deg 30% 52%) 20%,hsl(34deg 36% 56%) 51%,hsl(34deg 44% 59%) 83%,hsl(34deg 53% 58%) 100%)",
        topBottomShade:
          "linear-gradient(to bottom, #2c201caf 0%, transparent 3%, transparent 97%, #2c201caf 100%)",
      },
    },
  },
  plugins: [],
};

//linear-gradient(285deg,hsl(34deg 26% 49%) 0%,hsl(34deg 30% 52%) 20%,hsl(34deg 36% 56%) 51%,hsl(34deg 44% 59%) 83%,hsl(34deg 53% 58%) 100%
