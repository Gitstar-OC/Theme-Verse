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
        message: "url('./assets/MessageBackground.png')",
        not: "url('./assets/NotFound.png')"
      },
      fontFamily: {
        cL: ["CL", "mono"],
        cF: ["CF", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#09FFB5",
        third: "#A6D2EA",
        "dark-bg": "#000000",
        "light-bg": "#ffffff",
        "dark-text": "#ffffff",
        "light-text": "#000000",
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
        morph: {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            background: "linear-gradient(45deg, #09FFB5 0%, #A6D2EA 100%)",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
            background: "linear-gradient(45deg, #e27fcb 0%, #A6D2EA 100%)",
          },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-in-out",
        slideUpFadeIn: "slideUpFadeIn 1s ease-in-out forwards",
        morph: "morph 8s ease-in-out infinite",
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
