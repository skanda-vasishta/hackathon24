import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const tabs = ["About", "Keywords", "Responsibilities"];

const ClassDetails = () => {
  const topRatedProfessors = [
    { id: "10", name: "MOCK M U", department: "Computer Science", rating: 3.2 },
    { id: "11", name: "HARDEKOPF B C", department: "Computer Science", rating: 4.4 },
    { id: "12", name: "SU J", department: "Computer Science", rating: 4.1 },
    { id: "13", name: "SEN P", department: "Computer Science", rating: 4.3 },
    { id: "14", name: "CONRAD P T", department: "Computer Science", rating: 4.2 },
    { id: "15", name: "FRANKS A", department: "Computer Science", rating: 3.5 },
    { id: "16", name: "KRUEGEL C I", department: "Computer Science", rating: 4.7 },
    { id: "17", name: "EL ABBADI A", department: "Computer Science", rating: 3.8 },
    { id: "18", name: "SURIANARAYANA", department: "Computer Science", rating: 2.4 },
    { id: "19", name: "BURK K T", department: "Computer Science", rating: 3.1 },
    { id: "20", name: "YANG T", department: "Computer Science", rating: 4.0 },
    { id: "21", name: "WANG R K", department: "Computer Science", rating: 3.6 },
    { id: "22", name: "YAN L", department: "Computer Science", rating: 4.2 },
    { id: "23", name: "HOLLERER T", department: "Computer Science", rating: 3.9 },
    { id: "24", name: "GUPTA T", department: "Computer Science", rating: 4.5 },
    { id: "25", name: "WANG YUXIANG", department: "Computer Science", rating: 3.4 },
    { id: "26", name: "WANG Y F", department: "Computer Science", rating: 4.6 },
    { id: "27", name: "GUPTA A", department: "Computer Science", rating: 3.7 },
    { id: "28", name: "FENG YU", department: "Computer Science", rating: 4.1 },
    { id: "29", name: "EMRE M", department: "Computer Science", rating: 2.9 },
    { id: "30", name: "GRIESSBAUM N", department: "Computer Science", rating: 3.2 },
    { id: "31", name: "SHERWOOD T P", department: "Computer Science", rating: 4.0 },
    { id: "32", name: "SOLIS S W", department: "Computer Science", rating: 2.9 },
    { id: "33", name: "BULTAN T", department: "Computer Science", rating: 4.4 },
    { id: "34", name: "MIRZA D", department: "Computer Science", rating: 3.8 },
    { id: "35", name: "WANG Y W", department: "Computer Science", rating: 2.6 },
    { id: "36", name: "MATNI Z A", department: "Computer Science", rating: 4.2 },
    { id: "37", name: "GILBERT J R", department: "Computer Science", rating: 4.1 },
    { id: "38", name: "BEYELER M", department: "Computer Science", rating: 3.5 },
    { id: "39", name: "CHANG SHIYU", department: "Computer Science", rating: 4.3 },
    { id: "40", name: "DING YUFEI", department: "Computer Science", rating: 3.6 },
    { id: "41", name: "LOKSHTANOV D", department: "Computer Science", rating: 4.7 },
    { id: "42", name: "KHARITONOVA Y", department: "Computer Science", rating: 3.9 },
    { id: "43", name: "VIGODA E J", department: "Computer Science", rating: 2.8 },
    { id: "44", name: "YAN X", department: "Computer Science", rating: 4.5 },
    { id: "45", name: "SRA M", department: "Computer Science", rating: 3.2 },
    { id: "46", name: "HANSEN K D", department: "Computer Science", rating: 4.6 },
    { id: "47", name: "BELDING E M", department: "Computer Science", rating: 4.0 },
    { id: "48", name: "BALKIND J M", department: "Computer Science", rating: 3.7 },
    { id: "49", name: "RUIZ T D", department: "Computer Science", rating: 2.5 },
    { id: "50", name: "DEBRUHL B E", department: "Computer Science", rating: 4.4 },
    { id: "51", name: "ANANTH P V", department: "Computer Science", rating: 3.8 },
    { id: "52", name: "SINGH A K", department: "Computer Science", rating: 4.3 }
  ];;
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("professor-details", {
    job_id: topRatedProfessors.id,
  });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

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
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
      </>
    </SafeAreaView>
  );
};

export default ClassDetails;
