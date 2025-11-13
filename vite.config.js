import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['f3c2e2be2a04.ngrok-free.app'],
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src') // resource 파일 import 위함
  //   }
  // }
})
