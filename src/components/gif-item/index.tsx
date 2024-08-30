import { Image, Text, View } from 'react-native';

interface Gif {
  id: string;
  name: string;
  url: string;
}

export function GifItem({ gif }: { gif: Gif }) {
  return (
    <View className='my-2'>
      <Image
        source={{ uri: gif.url }}
        className='w-full h-96 rounded-lg pb-2'
      />

      <Text className='text-white font-bold items-center'>{gif.name}</Text>
    </View>
  );
}
