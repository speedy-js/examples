import { defineConfig }  from '@speedy-js/speedy-core';

export default defineConfig({
  input: {
    first: './src/first/index.tsx',
    second: './src/second/index.tsx'
  },
  output: {
    clean: false
  },
  html: {
    template: './src/index.html'
  }
})
