/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        hanalei: ["Hanalei Fill", "cursive"],
        monte: ["Montserrat", "sans-serif"],
      },
      colors: {
        customPurple: "#5D3FD3",
        blackish: "#333333",
        searchGray: "#F5F5F5",
        subscribe: "#FF6F61"
      },
      width: {
        Wdt: "1440px",
      },
      height: {
        hgt: "80px",
      },
    },
  },
  plugins: [],
};
