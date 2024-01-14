import React from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <View>
      <TextInput
        placeholder="Search for Professors"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={onSearch} />
    </View>
  );
};

export default SearchBar;
