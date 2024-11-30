/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightPink: '#ff00a7',
        darkPink: 'ff0096',
        darkGray: '#4e4e4e',
        lightGray: '#cbcbcb',
        primary: '#ffffff',
        secondary: '#000000',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      }
    },
  },
  plugins: [],
}

