import { useFetchGifs } from '@/src/hooks/useFetchGifs';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { GifItem } from '../gif-item';

interface GifsProps {
  query: string;
}

export function Gifs({ query }: GifsProps) {
  const { gifs, isLoading } = useFetchGifs(query);

  return (
    <View>
      {isLoading && <ActivityIndicator size='large' color='#00ff00' />}

      <FlatList data={gifs} renderItem={({ item }) => <GifItem gif={item} />} />
    </View>
  );
}
