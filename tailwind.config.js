/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dBackgroundColor : '#000000',
        lBackgroundColor : '#ffffff',
        navBg : 'rgb(30 58 138)',
        textColor : '#ffffff',
    }
    },
  },
  plugins: [],
}