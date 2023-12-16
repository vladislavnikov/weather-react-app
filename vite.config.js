import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weather-react-app/"
})


// git add . 
// git commit -m "add: deploy workflow" 
// git push