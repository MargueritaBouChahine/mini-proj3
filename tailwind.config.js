/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Figtree: ['"Figtree"'],
      },
      colors: {
        customYellow : '#f5d04e',
      },
      boxShadow: {
        'custom-shadow' : '6px 6px 0px 1px rgba(0, 0, 0, 1)', 
      },
      screens: {
        'xs': '375px',
        'xxl': '1440px',
      },
    },
  },
  plugins: [],
}

