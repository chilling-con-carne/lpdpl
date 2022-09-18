/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#5E901F'
        },
        gray: {
          300: '#F3F1F6'
        }
      }
    },
  },
  plugins: [require('daisyui')],
}
