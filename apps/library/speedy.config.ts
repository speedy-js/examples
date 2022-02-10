import { defineConfig } from '@speedy-js/speedy-core';
import path from 'path';

export = defineConfig({
  input: {
    main: path.resolve(__dirname, './src/lib.ts'),
  },
  minify: false,
  output: {
    path: 'dist',
    filename: 'lib',
    format: 'esm',
  },
  preset: 'library',
});
