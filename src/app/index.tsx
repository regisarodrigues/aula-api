import Constants from 'expo-constants';
import { ScrollView, View } from 'react-native';
import { Gifs } from '../components/gifs';
import { Header } from '../components/heaser';
import { Search } from '../components/search';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className='bg-blue-300'
      showsVerticalScrollIndicator={false}
    >
      <View className='w-full px-5' style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Search />

        <Gifs />
      </View>
    </ScrollView>
  );
}
