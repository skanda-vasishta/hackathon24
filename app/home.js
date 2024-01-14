import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, TextInput, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { Link, Stack, router } from "expo-router";
import { ScreenHeaderBtn } from "../components";
import { StyleSheet } from "react-native"
import styles from "../styles/search";
import useFetch from "../hook/useFetch";
import logo from "/Users/tanishmendki/Documents/hackathon24app/assets/images/logo.png";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [topRatedProfessors, setTopRatedProfessors] = useState([]);

  // Dummy data
    const dummyProfessors = [
      { id: "1", name: "CMPSC 8", department: "Computer Science", professors: 6 },
      { id: "2", name: "CMPSC 40", department: "Computer Science", professors: 2 },
      { id: "3", name: "CMPSC 130A", department: "Computer Science", professors: 5 },
    ];

  // Mimic fetching data on component mount
  useEffect(() => {
    setTopRatedProfessors(dummyProfessors);
  }, []);

  const handleSearch = () => {
    const filteredProfessors = dummyProfessors.filter(professor =>
      professor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTopRatedProfessors(filteredProfessors);
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <Image source={logo} style={{width:70, height: 55}}/>
          ),
          headerTitle: "Classify",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={setSearchTerm}
              placeholder='Enter Course Name...'
          />
          </View>

          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.searchTitle}>Popular Classes</Text>
        </View>

        <View style={{padding:SIZES.medium}}>
          <FlatList
            data={topRatedProfessors}
            renderItem={({ item }) => <ProfessorCard professor={item}/> }
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ProfessorCard = ({ professor }) => {
  const getRatingTextColor = (professors) => {
    if (professors > 4) {
      return 'green';
    } else if (professors >= 2) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  return (
    <View style={styles.card}>
      <Link href='/class-details/cs8'>
      <Text style={styles.name}>{professor.name}{"\n"}</Text>
      <Text style={styles.department}>{professor.department}{"\n"}</Text>
      <Text style={[styles.rating, { color: getRatingTextColor(professor.professors) }]}>Professors: {professor.professors}</Text>
      </Link>
    </View>
  );
};

export default Home;
