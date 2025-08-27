import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Sirve y construye desde /wiimage
  root: resolve(__dirname, 'wiimage'),
  // Base relativa: funciona en dev y al subir a cualquier subcarpeta
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'wiimage/index.html'),
        smile: resolve(__dirname, 'wiimage/smile.html'),
        smiletop: resolve(__dirname, 'wiimage/smiletop.html'),
      },
    },
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  publicDir: resolve(__dirname, 'wiimage/public'),
});