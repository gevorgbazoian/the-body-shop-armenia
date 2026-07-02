/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1B5E20",
        cream: "#F7F4EC",
        earth: "#7B5E3B",
        "soft-green": "#DDEED8",
        brandDark: "#0B260E",
        brandLight: "#FAF9F6"
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
