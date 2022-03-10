import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './containers/App';
import countReducer from '../reducers';
import { ServerData } from './types';

const Page: React.FC<ServerData> = ({ store: prefetchedStore }) => {
  const store = createStore(countReducer, prefetchedStore);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Page;
