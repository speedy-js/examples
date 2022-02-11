import { defineConfig } from '@speedy-js/speedy-core';
import { unplugin } from '@speedy-js/unplugin';
import vuePlugin from 'rollup-plugin-vue';

export = defineConfig({
  plugins: [unplugin(vuePlugin())],
  input: {
    index: './src/main.js',
  },
  html: {},
});
