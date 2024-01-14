import React from 'react';
import { View, Text, FlatList } from 'react-native';

const TopRatedProfessors = () => {
  const professors = [
    { id: '1', name: 'Dr. Smith', rating: 4.9 },
    { id: '2', name: 'Dr. Johnson', rating: 4.8 },
    // Add more professors here
  ];

  return (
    <View>
      <Text>Top Rated Professors</Text>
      <FlatList
        data={professors}
        renderItem={({ item }) => (
          <Text>{`${item.name} - Rating: ${item.rating}`}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TopRatedProfessors;

