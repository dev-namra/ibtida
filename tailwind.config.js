/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#F04C23',
        'background-col': '#16182C',
        'background-beige' : '#F7F7F3'
      },
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'roboto' : ['Roboto', 'sans-serif'],
        'work-sans' : ['Work Sans', 'sans-serif'],
        'lobster-two' : ['Lobster Two', 'sans-serif'],
        'italiana' : ['Italiana', 'sans-serif']
      }
    },
  },
  plugins: [],
}
