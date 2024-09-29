import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      // "@": indica que el alias llevará a la ubicación
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
