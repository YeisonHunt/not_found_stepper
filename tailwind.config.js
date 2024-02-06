/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}

