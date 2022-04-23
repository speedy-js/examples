import { defineConfig } from '@speedy-js/speedy-core';
import windiPlugin from 'rollup-plugin-windicss';
import { unplugin } from '@speedy-js/unplugin';

export = defineConfig({
  input: {
    index: './src/index.tsx',
  },
  html: {},
  plugins: [...windiPlugin().map((x) => unplugin(x))],
});
