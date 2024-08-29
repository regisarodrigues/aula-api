import { Feather } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

export function Search() {
  return (
    <View className='my-5 w-full flex-row border border-white h-14 rounded-full items-center gap-2 px-5 bg-transparent'>
      <Feather name='search' size={24} color='white' />

      <TextInput
        className='flex-1 text-2xl  font-bold text-white h-full w-full bg-transparent'
        placeholder='Pesquisar Gifs...'
      />
    </View>
  );
}
