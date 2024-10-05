/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["lofi", "forest"],
  },
  theme: {
    extend: {
      fontFamily: {
        custom: ["Kanit", "sans-serif"], 
      },
    },
  },
  plugins: [require("daisyui")],
};
