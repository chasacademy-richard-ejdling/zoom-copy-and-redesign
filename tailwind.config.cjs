/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Noto-Sans': ['"Noto Sans"', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'nav-links': '#666484',
        'zoom-blue': '#0b5cff',
        'zoom-blue-hover': '#0050f0'
      }
    },
  },
  plugins: [],
};
