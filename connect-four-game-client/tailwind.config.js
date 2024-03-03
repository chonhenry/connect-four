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
      sm: "500px",
    },
    extend: {},
  },
  plugins: [],
};
