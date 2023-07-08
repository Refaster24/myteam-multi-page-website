import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { resolve } from 'path'


const outDir = resolve(__dirname,'dist')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir,
    emptyOutDir:true,
    rollupOptions:{
      input:{
        index : resolve(__dirname,'index.html'),
        about : resolve(__dirname,'about.html'),
        // contact : resolve(__dirname,'contact.html'),
      }
    }
  }
})
