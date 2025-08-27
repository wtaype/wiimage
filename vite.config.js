import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const vtag = env.VTAG || '';

  const base =
    mode === 'pages' ? (env.BASE || './')
    : mode === 'firebase' ? './'
    : './';

  const outDir = mode === 'tag' && vtag ? `dist/${vtag}` : 'dist';

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
      outDir,
      emptyOutDir: true,
    },
    publicDir: 'public',
  };
});