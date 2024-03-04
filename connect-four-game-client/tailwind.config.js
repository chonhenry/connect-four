/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      "dark-purple": "#5c2dd5",
      purple: "#7945ff",
      red: "#fd6687",
      white: "#ffffff",
      yellow: "#ffce67",
    },
    fontFamily: {
      sans: ["CustomFont"],
    },
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
