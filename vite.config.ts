import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ReactCompilerConfig = {
  // compilationMode: "annotation",
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react': ['react'],
          'react-dom': ['react-dom'],
        },
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
      }
    }
  },
  plugins: [react({
    babel: {
      plugins: [
        ['babel-plugin-react-compiler', ReactCompilerConfig],
      ],
    },
  })],
})
