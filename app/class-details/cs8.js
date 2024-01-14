import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  FlatList,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES, FONT } from "../../constants";
import styles from "../../styles/search";
import gpaImage from "/Users/tanishmendki/Documents/hackathon24app/app/avggpa.png";

const ClassDetails = () => {
    const router = useRouter();
    const topRatedProfessors = [
        {'id': '1', 'name': 'ELSAYED S H (Recommended)', 'department': 'CMPSCW', 'avggpa': 3.68},
        {'id': '2', 'name': 'CONRAD P T', 'department': 'CMPSCW', 'avggpa': 3.6},
        {'id': '3', 'name': 'MATNI Z A', 'department': 'CMPSCW', 'avggpa': 3.38},
        {'id': '4', 'name': 'MOEHLIS J M', 'department': 'CMPSCW', 'avggpa': 3.36},
        {'id': '5', 'name': 'MIRZA D', 'department': 'CMPSCW', 'avggpa': 3.28},
        {'id': '6', 'name': 'KHARITONOVA Y', 'department': 'CMPSCW', 'avggpa': 3.03},
    ];;
  
    const [refreshing, setRefreshing] = useState(false);

    const screenWidth = Dimensions.get('window').width;
    console.log(screenWidth)
    const originalImageWidth = 500;  // Replace with your image's original width
    const originalImageHeight = 500; // Replace with your image's original height
    const aspectRatio = originalImageWidth / originalImageHeight;
    const scaledHeight = screenWidth / aspectRatio;
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      refetch()
      setRefreshing(false)
    }, []);
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableHighlight onPress={()=>{router.back()}}>
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension='60%'
              />
              </TouchableHighlight>
            ),
            headerTitle: "Classify",
          }}
        />
  
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            
              <View style={{ padding: SIZES.medium, paddingBottom: SIZES.large }}>
                <Text style={styles.classTitle}>CMPSC 8</Text>
                <Text style={{fontFamily: FONT.bold, fontSize: SIZES.xLarge, color: COLORS.primary}}>Average GPA of Course:</Text>
                <Image source={gpaImage} style={{width: 360, height: 300}}/>
              </View>

              <View style={{padding: SIZES.medium}}>
                <FlatList
                data={topRatedProfessors}
                renderItem={({ item }) => <ProfessorCard professor={item}/> }
                keyExtractor={item => item.id}
                />
              </View>

          </ScrollView>
  
        </>
      </SafeAreaView>
    );
  };

  const ProfessorCard = ({ professor }) => {
    const getTextColor = (id) => {
      if (id == 1) {
        return 'green';
      } else if (id >= 2 && id <= 4) {
        return 'orange';
      } else {
        return 'red';
      }
    }
    return (
      <View style={styles.card}>
        <Text style={[styles.profname, { color: getTextColor(professor.id) }]}>{professor.name}{"\n"}</Text>
        <Text style={styles.gpa}>Average GPA: {professor.avggpa}</Text>
      </View>
    );
  };
  
  export default ClassDetails;