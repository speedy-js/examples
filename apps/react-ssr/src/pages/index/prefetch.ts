import { defineGetServerData } from '@speedy-js/universal/types'

export default defineGetServerData(async () => {
  return {
    props: await fetch(
      "http://worldtimeapi.org/api/timezone/Asia/Shanghai"
    ).then((data) => data.json()),
  };
});
