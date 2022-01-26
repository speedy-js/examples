import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['index.ts'],
  bundle: true,
  format: 'cjs',
  platform: 'node',
  target: 'node12',
  outfile: 'index.js',
  sourcemap: true,
  watch: process.argv[2] === '--watch',
});
