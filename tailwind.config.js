/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
const aspectRatio = require("@tailwindcss/aspect-ratio");

module.exports = {
  content: [
    "./pages/**/*.{js, jsx}",
    "./components/**/*.{js, jsx}",
    "./layout/**/*.{js, jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        foreground: "var(--foreground)",
        backDrop: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        interphase: ["Interphase", ...fontFamily.sans],
      },
    },
  },
  plugins: [aspectRatio],
};
