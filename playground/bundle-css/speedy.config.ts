import { defineConfig } from '@speedy-js/speedy-core';

export = defineConfig({
  input: {
    'index': './src/index.css'
  },
  output: {
    filename: 'bundle'
  },
  style: {
    minify: false
  }
});
