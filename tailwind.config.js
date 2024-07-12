/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      inset: {
        '10p': '10%',
        '15p': '15%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
      }
    },
  },
  variants: {},
  plugins: [],
}