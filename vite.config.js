import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script', // Usaremos nuestro propio script de registro en sw.js
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,woff,woff2}']
      },
      devOptions: {
        enabled: true // Habilita PWA en modo desarrollo para pruebas
      },
      // Le decimos a VitePWA que nuestro service worker personalizado es la fuente
      srcObject: {
        src: 'src/sw.js',
        filename: 'sw.js',
        strategies: 'injectManifest',
      },
      manifest: {
        name: 'Ximena López Yule - La Voz del Alto Patía',
        short_name: 'Ximena López',
        description: 'Sitio oficial de la candidata a la Cámara de Representantes, Ximena López Yule. Conexión ciudadana, alertas y propuestas.',
        theme_color: '#4B0082',
        background_color: '#0d061f',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
})