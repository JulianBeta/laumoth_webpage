import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic', // Optional: Helps with CRA migration
      babel: {
        plugins: [
          // Add any CRA babel plugins you were using
        ],
      },
    }),
  ],
  build: {
    outDir: 'build', // Matching CRA's output directory
    sourcemap: true, // Helps with debugging
    chunkSizeWarningLimit: 1600, // Adjust bundle size warning
  },
  server: {
    port: 3000, // Match CRA's default port
    open: true, // Automatically open browser
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' }, // Handle Webpack's ~ imports
      { find: 'src', replacement: '/src' }, // Absolute imports
    ],
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle deps
  },
});