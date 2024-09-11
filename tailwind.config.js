/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "burgundy": "#913764",
        "light-burgundy": "#C981A5",
        "gold": "#FDDC5C",
        "cyan": "#ACFFFC"
      }
    },
  },
  plugins: [],
}

