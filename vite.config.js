import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
import path from 'node:path'

export default defineConfig({
  plugins: [
    uni(),
  ],
  resolve: {
    alias: {
      '^@': path.resolve(__dirname, './src/'),
    },
  },
})