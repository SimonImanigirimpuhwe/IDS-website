const colors = require("tailwindcss/colors")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#5075D4",
      secondary: "#0BE1D4",
      tertiary: "#F5F5F5"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}