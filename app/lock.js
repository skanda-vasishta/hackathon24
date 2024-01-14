import { COLORS, FONT, icons, images, SIZES } from "../constants";
import styles from "../styles/search";
import { SafeAreaView, ScrollView, View, TextInput, Text, FlatList, Image, TouchableOpacity, Button } from "react-native";
import logoScreen from "/Users/tanishmendki/Documents/hackathon24app/app/lock-screen.png"
import { Link, Stack, useRouter } from "expo-router";

const Lock = () => {
    const router = useRouter();

    const navigateToHome = () => {
        router.push('/home'); // Assuming '/' is the path for your home page
    };
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
            <View>
                <Image source={logoScreen} style={{height: 450}}/>
            </View>
            <View style={styles.button}>
            <Link href='/home'>
            <Text style={styles.buttonText}>Begin!</Text>
            </Link>
            </View>
        </SafeAreaView>

    );
}

export default Lock;