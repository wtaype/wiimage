import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  const base = isGitHubPages ? '/wiimage/' : '/';
  
  return {
    base,
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          smile: resolve(__dirname, 'smile.html'), 
          smiletop: resolve(__dirname, 'smiletop.html') 
        }
      }
    },
    publicDir: 'public'
  };
});