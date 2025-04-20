/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hColor: '#F5EEDD', 
        fColor: '#077A7D',
        iColor: '#BEE4D0'
      },
    },
  },

  plugins: [],
}

