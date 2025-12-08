/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        castoro: ['"Castoro"', "serif"], // Custom font
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class", // enable class-based dark mode

  daisyui: {
    themes: ["night"],
  },
};
