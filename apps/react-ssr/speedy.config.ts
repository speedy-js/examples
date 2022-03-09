import { defineConfig } from '@speedy-js/universal';

export default defineConfig({
  html: {
    template: './index.html',
  },
  minify: false,
  ssr: {
    pages: [],
    environment: 'node',
  },
});
