import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    // Split vendors into long-lived cacheable chunks.
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['motion/react'],
          'icons': ['lucide-react'],
        },
      },
    },
    // Slightly higher inline limit — small svgs/png base64 stay embedded.
    assetsInlineLimit: 4096,
    // Drop console/debugger in production builds.
    minify: 'esbuild',
  },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    hmr: process.env.DISABLE_HMR !== 'true',
    proxy: {
      '/api': 'http://localhost:8787',
    },
  },
});
