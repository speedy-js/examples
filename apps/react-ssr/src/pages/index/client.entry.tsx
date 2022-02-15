import React from 'react';
import ReactDOM from 'react-dom';
import { defineHydrateFromServerSidePropsResult } from '@speedy-js/universal/runtime';
import { App, AppProps } from './App';

export const hydrate = defineHydrateFromServerSidePropsResult<AppProps>(
  ({ props }) => {
    ReactDOM.hydrate(<App {...props} />, document.getElementById('app'));
  },
);
