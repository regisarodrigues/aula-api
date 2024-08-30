import { useEffect, useState } from 'react';
import { getGifs } from '../lib/getGifs';

export const useFetchGifs = (query: string) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Adicionado isLoading

  const fetchGifs = async () => {
    const gifs = await getGifs(query);
    setGifs(gifs);
    setIsLoading(false); // Adicionado isLoading
  };

  useEffect(() => {
    fetchGifs();
  }, [query]);

  return { gifs, isLoading };
};
