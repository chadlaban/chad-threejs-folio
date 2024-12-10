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
    },
  },
  plugins: [],
};
