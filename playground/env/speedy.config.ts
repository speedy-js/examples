import { defineConfig }  from '@speedy-js/speedy-core';

export default defineConfig({
  input: {
    index: './src/index.tsx'
  },
  output: {
    publicPath: process.env.PUBLIC_PATH || 'unknown'
  },
  html: {}
})
