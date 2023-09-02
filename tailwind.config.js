/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '400px': '400px',
      },
      width: {
        '500px': '500px',
      },
      padding: {
        '35px': '35px',
      },
      fontFamily: {
        body: ['Roboto']
      },
    },
  },
  plugins: [],
}

