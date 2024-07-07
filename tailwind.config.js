/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        hanalei: ["Hanalei Fill", "cursive"],
      },
      colors: {
        customPurple: "#5D3FD3",
        blackish: "#333333",
      },
    },
  },
  plugins: [],
};
