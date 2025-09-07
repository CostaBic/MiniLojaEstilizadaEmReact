/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class', // controlado via class 'dark' em <html>
  theme: {
    extend: {
      colors: {
        primary: '#0B72FF',
        accent: '#06D6A0',
        tagNew: '#06D6A0',
        tagPromo: '#FF6B6B'
      },
      borderRadius: {
        md: '12px'
      },
      boxShadow: {
        '1': '0 1px 2px rgba(2,6,23,0.06)',
        '2': '0 6px 18px rgba(2,6,23,0.12)'
      },
      transitionDuration: {
        DEFAULT: '180'
      }
    }
  },
  plugins: [],
}
