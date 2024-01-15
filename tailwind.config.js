/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage:{
        "birthdaybgimg":"url('/src/images/birthdaybgimg.png')",
        "Celebrantcard":"url('/src/images/Celebrantcard.png')",
      },

      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'architects-daughter': ['Architects Daughter'],
      },
      spacing: {
        'maxBoundary': '500px',
      }
    },

  },
  plugins: [],
}