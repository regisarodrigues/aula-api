import { API_KEY, API_URL } from '@env';

const urlBase = API_URL;
const apiKey = API_KEY;
const limit = 10;

export const getGifs = async (query: string) => {
  const url = `${urlBase}?api_key=${apiKey}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((gif: any) => {
    return {
      id: gif.id,
      name: gif.title,
      url: gif.images.downsized.url,
    };
  });

  // console.log(gifs);

  return gifs;
};
