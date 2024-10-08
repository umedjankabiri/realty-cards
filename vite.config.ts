import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/realty-cards/',
  plugins: [react()],
  resolve: {
    alias: {
      public: path.resolve(__dirname, 'public/assets'),
      common: path.resolve(__dirname, 'src/common')
    }
  }
})
