/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de Morados (Noche)
        'brand-purple': {
          DEFAULT: '#8A2BE2', // Morado principal (más brillante)
          dark: '#4B0082',    // Morado oscuro (para fondos)
          deep: '#1a0c2e',    // Morado casi negro
          night: '#0d061f',   // El fondo más profundo
        },
        // Paleta de Dorados (Letras y Acentos)
        'brand-gold': {
          DEFAULT: '#B8860B', // Dorado opaco (DarkGoldenRod)
          light: '#FFD700',   // Dorado brillante para hover/iluminación
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
      // Efecto de sombra para el brillo dorado
      dropShadow: {
        'gold-glow': '0 0 15px rgba(255, 215, 0, 0.5)',
        'gold-glow-lg': '0 0 25px rgba(255, 215, 0, 0.7)',
      }
    },
  },
  plugins: [],
}