import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { CardGif } from './gif';

interface GifsProps {
  query: string;
}

export function Gifs({ query }: GifsProps) {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    // Lógica para buscar GIFs usando a API de sua preferência
    // com base no searchTerm
    console.log('Query:', query);
  }, [query]);

  return (
    <FlatList data={gifs} renderItem={({ item }) => <CardGif gif={item} />} />
  );
}
