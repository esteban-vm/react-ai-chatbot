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
      devOptions: { enabled: true },
      manifest: {
        id: '/',
        name: 'React AI Chatbot',
        short_name: 'AI Chatbot',
        description: 'An AI Chatbot application made for my portfolio',
        theme_color: '#2de6a8',
        background_color: '#171717',
        display: 'standalone',
        display_override: ['window-controls-overlay', 'fullscreen'],
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
            src: 'screenshots/desktop-dark.webp',
            sizes: '1744x901',
            form_factor: 'wide',
            label: 'Desktop view showing chatbot interface in dark mode',
          },
          {
            src: 'screenshots/desktop-light.webp',
            sizes: '1744x901',
            form_factor: 'wide',
            label: 'Desktop view showing chatbot interface in light mode',
          },
          {
            src: 'screenshots/mobile-dark.webp',
            sizes: '1290x2796',
            form_factor: 'narrow',
            label: 'Mobile view showing chatbot interface in dark mode',
          },
          {
            src: 'screenshots/mobile-light.webp',
            sizes: '1290x2796',
            form_factor: 'narrow',
            label: 'Mobile view showing chatbot interface in light mode',
          },
        ],
      },
      includeAssets: ['**/*'],
    }),
    tsconfigPaths(),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1_500,
  },
})
