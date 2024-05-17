/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/NavbarBackground.png')",
      },
      fontFamily: {
        'cF': ['CF', 'sans-serif'],
      },
      colors: {
        'primary': '#ffffff',
        'secondary': '#09FFB5',
        'dark-bg': '#000000', // Dark theme background
        'light-bg': '#ffffff', // Light theme background
        'dark-text': '#ffffff', // Dark theme text
        'light-text': '#000000', // Light theme text
      },
    },
  },
  plugins: [],
}
