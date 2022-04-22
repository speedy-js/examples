import { defineConfig } from '@speedy-js/speedy-core';
import { es5InputPlugin } from '@speedy-js/speedy-plugin-es5';

export default defineConfig({
  input: {
    index: './src/index.tsx'
  },
  output: {
    splitting: true
  },
  html: {},
   plugins:[
    es5InputPlugin(true)
  ]
})
