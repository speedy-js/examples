export const getServerSideProps = async () => {
  const resp = await fetch('https://emojihub.herokuapp.com/api/all/category_smileys_and_people');
  const res = await resp.json();

  return {
    emojis: res,
  };
};
