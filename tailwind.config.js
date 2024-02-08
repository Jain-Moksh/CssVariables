/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor : '#000000',
        navBg : 'rgb(30 58 138)',
        textColor : '#ffffff',
    }
    },
  },
  plugins: [],
}