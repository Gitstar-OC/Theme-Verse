// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'hero': "url('./assets/NavbarBackground.png')",
//       },
//       fontFamily: {
//         'cF': ['CF', 'sans-serif'],
//       },
//       colors: {
//         'primary': '#ffffff',
//         'secondary': '#ffcc00',
//       },
//     },
//   },
//   plugins: [
//     function ({ addUtilities }) {
//       const newUtilities = {
//         '.navItem': {
//           '@apply text-primary font-cF text-[30px] font-normal leading-normal relative': {},
//           '&:hover': {
//             '@apply text-secondary underline': {},
//           },
//           '&:active': {
//             '@apply text-primary opacity-75': {},
//           },
//           '&::after': {
//             content: '""',
//             '@apply block h-1 bg-secondary absolute bottom-0 left-0 transform scale-x-0 transition-transform duration-300': {},
//           },
//           '&:hover::after': {
//             '@apply scale-x-100': {},
//           },
//         },
//       }
//       addUtilities(newUtilities)
//     }
//   ],
// }
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
      colors: {
        'primary': '#ffffff',
        'secondary': '#09FFB5',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.navItem': {
          '@apply text-primary font-cF text-[30px] font-normal leading-normal relative': {},
          '&:hover': {
            '@apply text-secondary underline': {},
          },
          '&:active': {
            '@apply text-primary opacity-75': {},
          },
          '&::after': {
            content: '""',
            '@apply block h-1 bg-secondary absolute bottom-0 left-0 transform scale-x-0 transition-transform duration-300': {},
          },
          '&:hover::after': {
            '@apply scale-x-100': {},
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
