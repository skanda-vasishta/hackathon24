import React from 'react';
import { View, Text, FlatList } from 'react-native';

const RecentlyReviewedProfessors = () => {
  const professors = [
    { id: '3', name: 'Dr. Williams', reviewDate: '2024-01-10' },
    { id: '4', name: 'Dr. Brown', reviewDate: '2024-01-08' },
    // Add more professors here
  ];

  return (
    <View>
      <Text>Recently Reviewed Professors</Text>
      <FlatList
        data={professors}
        renderItem={({ item }) => (
          <Text>{`${item.name} - Reviewed on: ${item.reviewDate}`}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default RecentlyReviewedProfessors;
