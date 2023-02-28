/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'blink 1s steps(5, start) infinite'
      },
      keyframes: {
        blink: {
          to: { visibility: 'hidden' }
        }
      },
      colors:{
        'primary':'#2F3C71',
        'secondary':'#A37D53'
      }
    },
  },
  plugins: [],
}