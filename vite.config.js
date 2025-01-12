import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      },
    },
  },
  server: {
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
