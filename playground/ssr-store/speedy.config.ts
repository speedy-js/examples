import { defineConfig } from '@speedy-js/universal';

export default defineConfig({
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
