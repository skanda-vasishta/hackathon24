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

export default ProfessorCard;
