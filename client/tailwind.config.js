/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jura: ["Jura", "sans-serif"],
      },
      colors: {
        "costom-green": "#258f46",
        light: "#e6e6e6",
        "costom-red": "#e32d05",
        "cost-cinza": "#E6E6E6",
      },
    },
  },
  plugins: [],
};
