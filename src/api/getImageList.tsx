import axios from 'axios';

export const getItemList = async () => {
  const data = await axios({
    method: 'get',
    url: 'https://api.pexels.com/v1/curated',
  });
  return data;
};

export const getNextItemList = async ({url}: {url: string}) => {
  const data = await axios({
    method: 'get',
    url: url,
  });
  return data;
};
