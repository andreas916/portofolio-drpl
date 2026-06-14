import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Menggunakan relative path agar build bisa dijalankan di subdirectory GitHub Pages
  base: './',
})
