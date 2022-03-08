import { defineConfig } from '@speedy-js/speedy-core';

export = defineConfig([
  {
    input: {
      index: './src/index.ts',
    },
    output: {
      filename: 'index.esm',
      format: 'esm',
    },
    minify: false,
    preset: 'library',
  },
  {
    input: {
      index: './src/index.ts',
    },
    output: {
      filename: 'index.cjs',
      format: 'cjs'
    },
    minify: false,
    preset: 'library',
  },
]);
