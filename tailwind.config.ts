/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "./layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "./pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "./plugins/**/*.{js,ts,mjs}",
    "./composables/**/*.{js,ts,mjs}",
    "./utils/**/*.{js,ts,mjs}",
    "./{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "./{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "./app.config.{js,ts,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": {
          "50": "#f0f6fe",
          "100": "#deeafb",
          "200": "#c4dcf9",
          "300": "#9bc4f5",
          "400": "#6ca5ee",
          "500": "#4984e8",
          "600": "#3468dc",
          "700": "#2b54ca",
          "800": "#2945a4",
          "900": "#263d82",
          "950": "#1d2953",
        },
        "custom-black": "#1a1a1a",
      },
    },
  },
  plugins: [],
};
