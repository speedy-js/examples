import { defineConfig }  from '@speedy-js/speedy-core';

export default defineConfig({
  input: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name]'
  },
  html: {}
})
