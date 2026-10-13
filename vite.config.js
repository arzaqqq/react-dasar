import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {useState, useRef} from 'react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build :{
    rollupOptions: {
      input: {
        index: 'index.html',
        state: 'state.html',
        ref: 'ref.html'
      }
    }
  }
})
