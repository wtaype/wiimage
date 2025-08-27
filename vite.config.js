import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(() => {
  const isCI = !!process.env.GITHUB_ACTIONS;
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
  const tag = process.env.VTAG || '';
  const isFirebase = process.env.FIREBASE_DEPLOY === '1';

  const base = isFirebase
    ? '/'                                   // Firebase en raíz
    : isCI
      ? `/${repo}/${tag ? `${tag}/` : ''}`  // Pages: /repo[/v10/]/
      : './';                               // dev local

  return {
    root: __dirname,
    base,
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
  };
});