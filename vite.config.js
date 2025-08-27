import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(() => {
  const isCI = !!process.env.GITHUB_ACTIONS;
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
  const tag = process.env.GITHUB_REF_TYPE === 'tag' ? process.env.GITHUB_REF_NAME : '';
  const isFirebase = process.env.FIREBASE_DEPLOY === '1';

  const base = isFirebase ? './' : (isCI ? `/${repo}/${tag ? `${tag}/` : ''}` : './');

  return {
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
    publicDir: 'public',
  };
});