import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rogab01.github.io',
  base: '/lito',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
