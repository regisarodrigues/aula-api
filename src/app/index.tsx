import Constants from 'expo-constants';
import { useState } from 'react';
import { View } from 'react-native';
import { Gifs } from '../components/gifs';
import { Header } from '../components/heaser';
import { Search } from '../components/search';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = (text: string) => {
    setSearchValue(text);
  };

  return (
    <View style={{ flex: 1 }} className='bg-blue-300'>
      <View className='w-full px-5' style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Search onSearch={handleSearch} />

        <Gifs query={searchValue} />
      </View>
    </View>
  );
}
