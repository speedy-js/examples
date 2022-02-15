import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { defineServerSideRender } from '@speedy-js/universal/runtime';
import { App, AppProps } from './App';

export const render = defineServerSideRender<AppProps>(({ props }) => {
  return ReactDOMServer.renderToString(<App {...props} />);
});
