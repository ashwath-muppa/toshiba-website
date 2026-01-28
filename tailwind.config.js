/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D47A1',
        secondary: '#4CAF50',
        accent: '#4DD0E1',
        text: '#212121',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #FFFFFF, #E3F2FD)',
      }
    },
  },
  plugins: [],
}
