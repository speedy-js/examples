import { defineConfig } from '@speedy-js/speedy-core';
import { unplugin } from '@speedy-js/unplugin';
import vuePlugin from 'rollup-plugin-vue';
import windiPlugin from 'rollup-plugin-windicss';
import Icons from 'unplugin-icons/rollup';
import path from 'path';
export default defineConfig({
  plugins: [unplugin(vuePlugin()), ...windiPlugin().map((x) => unplugin(x)), unplugin(Icons({ compiler: 'vue3' }))],
  input: {
    index: './src/main.js',
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  html: {},
});
