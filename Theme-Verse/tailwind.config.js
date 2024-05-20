// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
      backgroundImage: {
        hero: "url('./assets/NavbarBackground.png')",
        footer: "url('./assets/FooterBackground.png')",
      },
      fontFamily: {
        cL: ["CL", "mono"],
        cF: ["CF", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        "dark-bg": "#000000",
        "light-bg": "#ffffff",
        "dark-text": "#ffffff",
        "light-text": "#000000",
        secondary: "#09FFB5",
        third: "#A6D2EA",
        heading: "#1A3DF8",
        border: "#0F94B2", // for the border
      },
      fontSize: {
        "hover-lg": "40px",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUpFadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-in-out",
        slideUpFadeIn: "slideUpFadeIn 1s ease-in-out forwards",
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["hover"],
      textColor: ["hover"],
    },
  },
  plugins: [],
};
