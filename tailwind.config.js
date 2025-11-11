/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { zee: { primary:"#0A1E3F", blue:"#0061FF", teal:"#00C6A7", accent:"#15E6B5" } },
      boxShadow: { soft:"0 10px 35px rgba(2,6,23,.12)" }
    },
  },
  plugins: [],
}