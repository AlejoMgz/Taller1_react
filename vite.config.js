import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Taller1_react/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,jsx,css,html,ico,png,svg,jpg,webp}'],
        maximumFileSizeToCacheInBytes: 3000000 // <--- Aumenta el límite a 3MB
      },
      includeAssets: ['descarga.png', 'descargab.png', 'PWA.png', 'favicon.svg'],
      manifest: {
        name: 'Mi primera PWA',
        short_name: 'MyAppPWA',
        description: 'La PWA mas fantastica del mundo',
        scope: '/Taller1_react/',
        start_url: '/Taller1_react/',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
        screenshots: [
          {
            src: "PWA.png",
            sizes: "1280x640",
            type: "image/png",
            form_factor: "wide"
          }
        ],
        icons: [
          {
            src: 'descarga.png',
            sizes: '192x188',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'descargab.png',
            sizes: '225x225',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})