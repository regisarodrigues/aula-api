import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Keyboard, TextInput, View } from 'react-native';

interface SearchProps {
  onSearch: (query: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
    Keyboard.dismiss(); // Fechar o teclado ao clicar no botão de pesquisa
  };

  return (
    <View className='my-5 w-full flex-row border border-white h-14 rounded-full items-center gap-2 px-5 bg-transparent'>
      <TextInput
        value={searchTerm}
        onChangeText={handleSearchChange}
        onSubmitEditing={handleSearchSubmit} // Chama a função ao pressionar Enter
        autoFocus
        className='flex-1 text-2xl  font-bold text-white h-full w-full bg-transparent'
        placeholder='Pesquisar Gifs...'
      />
      <Feather name='search' size={24} color='white' />
    </View>
  );
}
