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
      navItem: {
        base: 'text-white font-cF text-[30px] font-normal leading-normal'
      }
    },
  },
  plugins: [],
}

