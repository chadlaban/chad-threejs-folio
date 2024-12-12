/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        glow: "glow 1.5s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { filter: "drop-shadow(0 0 10px #a3bf7c)" },
          "50%": { filter: "drop-shadow(0 0 20px #a3bf7c)" },
        },
      },
      fontFamily: {
        nts: ['"Noto Sans Tagalog"', "sans-serif"],
        js: ['"Josefin Slab"', "serif"],
        mt: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
      },
      colors: {
        customGray: "#222222",
      },
    },
  },
  plugins: [],
};
