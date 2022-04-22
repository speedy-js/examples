import { defineConfig } from '@speedy-js/speedy-core';
import vue from '@speedy-js/speedy-plugin-vue2';
import path from 'path';
export default defineConfig({
  plugins: [vue()],
  input: {
    index: './src/main.js',
  },
  resolve: {
    alias: {
      '@/styles': path.resolve(__dirname, './src/styles'),
    },
  },
  html: {},
});
