import { defineConfig } from '@speedy-js/speedy-core';

export = defineConfig({
  input: {
    index: './src/main.tsx',
  },
  html: {
    template: 'index.html',
  },
});
