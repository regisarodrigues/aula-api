import { useState } from 'react';
import { FlatList } from 'react-native';
import { CardGif } from './gif';

export function Gifs() {
  const [gifs, setGifs] = useState([]);

  return (
    <FlatList data={gifs} renderItem={({ item }) => <CardGif gif={item} />} />
  );
}
