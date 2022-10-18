/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        micolor: "#003300",
      },
      spacing: {
        "20xl": "30rem",
      },
      fontFamily: {
        mifuente: ["Fuzzy Bubbles", "sans-serif"],
      },
    },
  },
  plugins: [],
};
