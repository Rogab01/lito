import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://litolatina.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
