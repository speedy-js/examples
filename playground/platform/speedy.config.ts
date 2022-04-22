import { defineConfig }  from '@speedy-js/speedy-core';
import {nodePolyfillPlugin } from '@speedy-js/speedy-plugin-node-polyfill'
export default defineConfig([{
  input: {
    node: './src/index.ts'
  },
  output: {
    filename: 'node'
  },
  platform: 'node'
}, {
  input: {
    browser: './src/index.ts'
  },
  output: {
    filename: 'browser'
  },
  platform: 'browser',
  plugins: [nodePolyfillPlugin({})]
}])
