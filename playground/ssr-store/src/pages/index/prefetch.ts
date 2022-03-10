import { defineGetServerData } from '@speedy-js/universal/types';
import { ServerData } from './types';

export default defineGetServerData<ServerData>(async (context) => {
  return {
    store: {
      count: Math.floor(Math.random() * 100),
      date: Date.now(),
    },
  };
});
