import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const version = env.VTAG || '';             // ej: v10
  const isPages = mode === 'pages';
  const isFirebase = mode === 'firebase';
  const isTag = mode === 'tag' && version;

  const base = isPages
    ? (env.BASE || './')                      // pon aquí /amwil/ o /wiimage/ si tu Pages no usa dominio propio
    : './';

  const outDir = isTag ? `dist/${version}` : 'dist';

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
      outDir,
      emptyOutDir: true,
    },
    publicDir: resolve(__dirname, 'public'),
  };
});