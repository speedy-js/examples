import { defineGetServerSideProps } from '@speedy-js/universal/runtime';
import { AppProps } from './App';

export const getServerSideProps = defineGetServerSideProps<AppProps>(
  async (context) => {
    return {
      props: await fetch(
        'http://worldtimeapi.org/api/timezone/Asia/Shanghai',
      ).then((data) => data.json()),
    };
  },
);
