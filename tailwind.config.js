const colors = require("tailwindcss/colors")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "2/5": '150px',
       },
      backgroundImage: {
         'hero-fluid': "url('/src/fluid.svg')",
         'service-fluid': "url('/src/services-bg.svg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      },
      flexGrow: {
        '0': 0,
       DEFAULT: 1,
       '0.5': 0.5,
      }
    },
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
