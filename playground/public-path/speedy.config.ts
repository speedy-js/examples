import { defineConfig }  from '@speedy-js/speedy-core';

export = defineConfig({
  input: {
    index: './src/index.tsx'
  },
  output: {
    publicPath: 'http://speedy.dev'
  },
  html: {}
})
