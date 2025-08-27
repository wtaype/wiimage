import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: __dirname,        // ya estás dentro de /wiimage
  base: './',             // assets y links relativos
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
  publicDir: resolve(__dirname, 'public'),
});