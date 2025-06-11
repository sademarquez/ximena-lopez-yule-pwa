/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2E8B57',
        'brand-blue': '#1E40AF',
        'brand-orange': '#F59E0B',
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}