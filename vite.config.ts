import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'React AI Chatbot',
        short_name: 'AI Chatbot',
        description: 'An AI Chatbot application made for my portfolio',
        theme_color: '#2de6a8',
        background_color: '#171717',
        display: 'fullscreen',
        orientation: 'portrait-primary',
        categories: ['productivity', 'utilities'],
        icons: [
          {
            src: '/icons/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            src: 'screenshots/desktop.webp',
            sizes: '1920x1080',
            form_factor: 'wide',
            label: 'Desktop view showing chatbot interface',
          },
          {
            src: 'screenshots/mobile.webp',
            sizes: '750x1334',
            form_factor: 'narrow',
            label: 'Mobile view showing chatbot interface',
          },
        ],
      },
      includeAssets: ['/locales/en/translation.json', '/locales/es/translation.json'],
    }),
    tsconfigPaths(),
    tailwindcss(),
  ],
})
