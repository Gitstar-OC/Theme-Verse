/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/NavbarBackground.png')",
      },
      fontFamily: {
        'cF': ['CF', 'sans-serif'],
      },
      // Custom utility class
      textColor: {
        'white': '#ffffff',
      },
      fontSize: {
        '30px': '30px',
      },
      leading: {
        'normal': 'normal',
      },
      fontWeight: {
        'normal': '400',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.navItem': {
          '@apply text-white font-cF text-30px font-normal leading-normal': {},
        },
      }
      addUtilities(newUtilities)
    }
  ],
}