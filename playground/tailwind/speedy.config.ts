import { defineConfig } from '@speedy-js/speedy-core';

export = defineConfig({
  input: {
    index: './src/index.tsx',
  },
  html: {},
  style: {
    postcss: require('./postcss.config'),
  },
});
