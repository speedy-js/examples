export const getServerSideProps = async () => {
  return {
    props: await fetch(
      "http://worldtimeapi.org/api/timezone/Asia/Shanghai"
    ).then((data) => data.json()),
  };
};
