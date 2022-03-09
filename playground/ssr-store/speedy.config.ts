import { defineConfig } from '@speedy-js/universal';

export = defineConfig({
  ssr: {
    pages: [
      {
        path: '/',
        name: 'index',
      },
    ],
  },
  html: {},
});
