/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      backgroundColor: {
        'character':'#c542b0',
        'episode': '#9bf264',
        'locations': '#e7e179',
        'home': '#9dd4d9'
      },
      backgroundImage: {
      },
      dropShadow: {
        "morty": '0 10px 6px rgba(180,180,180,0.5)'
      },
      boxShadow: {
        'menu': '0 35px 50px -15px rgba(155,242,100,0.5)',
      }
    },
  },
  plugins: [],
}
