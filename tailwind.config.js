/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF2F2',
          100: '#A9B5DF',
          200: '#7886C7',
          900: '#2D336B',
        },
      },
    },
  },
  plugins: [],
}