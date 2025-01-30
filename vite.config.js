import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '27c0-2405-201-5c15-894-149f-92a3-c68a-a1d2.ngrok-free.app'
    ]
  }
})