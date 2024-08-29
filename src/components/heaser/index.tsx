import React from 'react';
import { Text, View } from 'react-native';

export function Header() {
  return (
    <View className=' w-full items-center justify-between'>
      <Text className='text-3xl font-bold text-white'>GIFS-API</Text>
    </View>
  );
}
