/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        glow: "glow 1.5s ease-in-out infinite",
        "slide-in": "slide-in 0.5s forwards",
      },
      keyframes: {
        glow: {
          "0%, 100%": { filter: "drop-shadow(0 0 10px #a3bf7c)" },
          "50%": { filter: "drop-shadow(0 0 20px #a3bf7c)" },
        },
        "slide-in": {
          from: {
            opacity: "0",
            transform: "translateX(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      fontFamily: {
        nts: ['"Noto Sans Tagalog"', "sans-serif"],
        js: ['"Josefin Slab"', "serif"],
        mt: ["Montserrat", "sans-serif"],
      },
      colors: {
        customGray: "#222222",
        customWhite: "#fafafa",
        customGreen: "#a3bf7c",
      },
    },
  },
  plugins: [],
};
