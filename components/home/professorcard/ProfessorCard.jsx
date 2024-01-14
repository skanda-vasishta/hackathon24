import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

const ProfessorCard = ({ professor }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{professor.name}</Text>
      <Text style={styles.department}>{professor.department}</Text>
      <Text style={styles.rating}>Rating: {professor.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  department: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: 'green',
  },
});
const ProfessorCard = ({ professor }) => {
  const getRatingColor = (rating) => {
    if (rating > 4) {
      return 'green';
    } else if (rating >= 2) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{professor.name}</Text>
      <Text style={styles.department}>{professor.department}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.ratingCircle, { backgroundColor: getRatingColor(professor.rating) }]} />
        <Text style={styles.rating}>Rating: {professor.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... other styles ...
  ratingCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  // ... other styles ...
});


export default ProfessorCard;
