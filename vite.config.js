import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        smile: resolve(__dirname, 'smile.html'),
        smiletop: resolve(__dirname, 'smiletop.html'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  publicDir: 'public',
});