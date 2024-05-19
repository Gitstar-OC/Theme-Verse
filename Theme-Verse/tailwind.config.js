/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/NavbarBackground.png')",
        'footer': "url('./assets/FooterBackground.png')"
      },
      fontFamily: {
        'cL': ['CL', 'mono'],
        'cF': ['CF', 'sans-serif']
      },
      colors: {
        primary: '#000000',
        'dark-bg': '#000000',
        'light-bg': '#ffffff',
        'dark-text': '#ffffff',
        'light-text': '#000000',
        secondary: '#09FFB5',
        third: "#A6D2EA",
        heading : "#1A3DF8",
        border: "#0F94B2", // for the border
      },
      fontSize: {
        'hover-lg': '40px',
      }
    },
  },
  variants: {
    extend: {
      fontSize: ['hover'],
      textColor: ['hover'],
    },
  },
  plugins: [],
};
