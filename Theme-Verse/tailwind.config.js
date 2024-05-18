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
        'cL': ['CL', 'mono'],
        'cF': ['CF', 'sans-serif']
      },
      colors: {
        primary: '#000000', // Example primary color
        'dark-bg': '#000000', // Dark background color
        'light-bg': '#ffffff', // Light background color
        'dark-text': '#ffffff', // Dark theme text color
        'light-text': '#000000', // Light theme text color
        secondary: '#09FFB5', // Secondary color for hover
      },
      fontFamily: {
        cF: ['CF', 'sans-serif'], // Custom font family
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};