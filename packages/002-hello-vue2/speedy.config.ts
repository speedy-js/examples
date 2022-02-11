import { defineConfig }  from '@speedy-js/speedy-core';
import vue from '@speedy-js/speedy-plugin-vue2';

export = defineConfig({
  input: {
    index: './src/main.js'
  },
  plugins: [vue()],
  html: {}
})
