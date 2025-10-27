import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  server: {
    proxy: {
      // Any request starting with /api will be proxied
      '/api': {
        target: 'https://api.nytimes.com',
        // Needed for virtual host
        changeOrigin: true,
        // Remove /api prefix when sending to targeted sites
        rewrite: (path) => path.replace(/^\/api/, ''),
        // Optionally add/remove headers, handle SSL, etc.
      },
    },
  },
})
