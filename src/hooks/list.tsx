import {useCallback, useEffect, useState} from 'react';
import {getImageListInterface} from '../types/getImageList';

import {createClient} from 'pexels';

const client = createClient(
  'aY86IqhtGLeUqyO1Mphx69sBvEwNWfInSegeEkgyCFrgXu7fz3ZvikVM',
);

export const useList = () => {
  const [data, setData] = useState<getImageListInterface>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingNext, setIsLoadingNext] = useState<boolean>(false);

  const getListAPI = useCallback(async () => {
    setIsLoading(true);
    try {
      const d = await client.photos.curated({per_page: 10});
      setData(d);
    } catch (error) {
      console.warn(error);
    }
    setIsLoading(false);
  }, []);

  const getNextList = useCallback(
    async (page: number) => {
      setIsLoadingNext(true);
      try {
        const d = await client.photos.curated({page: page, per_page: 10});
        setData({
          ...data,
          photos: [...data?.photos, ...d.photos],
          page: d.page,
        });
      } catch (error) {
        console.warn(error);
      }
      setIsLoadingNext(false);
    },
    [data],
  );

  const getRefetchList = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const arr = Array.from(Array(page).keys());
      const Promises = arr.map((x, i) => {
        return new Promise(async (resolve, reject) => {
          const d = await client.photos.curated({page: i + 1, per_page: 10});
          resolve(d);
        });
      });

      const allData = await Promise.all(Promises);
      let data: getImageListInterface;
      allData.map(x => {
        data = {
          ...x,
          photos: [...(data?.photos ? data.photos : []), ...x.photos],
        };
      });
    } catch (error) {
      console.warn(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getListAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    data,
    getNextList,
    isLoadingNext,
    getRefetchList,
  };
};
