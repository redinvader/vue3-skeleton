import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve, dirname } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias: { '@': resolve(__dirname, './src') }
  },
})
