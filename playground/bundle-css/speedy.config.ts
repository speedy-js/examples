import { defineConfig } from '@speedy-js/speedy-core';

export default defineConfig({
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
