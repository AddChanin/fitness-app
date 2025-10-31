import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams } from 'expo-router';

const ApiPage = () => {

  const apiKey = 'Your API Key';
  const baseUrl = 'exercisedb-api1.p.rapidapi.com';

  interface Exercise {
    exerciseId: string;
    name: string;
    imageUrl: string;
    bodyParts: string;
    equipments: string;
    exerciseType: string;
  }

  const { day } = useLocalSearchParams();

  const route = useNavigation();
  const storeData = async (key: any, value: any) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data stored successfully!');
      console.log(value);

    } catch (e) {
      console.error('Error storing data:', e);
    }
  };


  const [data, setData] = useState<Exercise[]>([]);
  const url = 'https://exercisedb-api1.p.rapidapi.com';
  const [name, setName] = useState("");

  const fetchData = async (bodyPart: string) => {
    const options = {
      method: 'GET',

      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': baseUrl
      }
    };

    try {
      const response = await fetch(`${url}/api/v1/exercises?bodyParts=${bodyPart}&limit=25`, options);
      const result = await response.json();
      setData(result.data.reverse());

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => { fetchData(""); }, [])

  return (
    <SafeAreaView style={styles.container}>

      {/* Choise selection */}

      <View style={styles.categoriesBox}>
        {/* 4 categories */}
        {/* Chest */}
        <View style={{ marginHorizontal: 10 }}
        >
          <TouchableOpacity
            onPress={() => {
              setName("Chest");
              fetchData("CHEST");
            }}
          >
            <Text style={styles.bodyPartText}>CHEST</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setName("Shoulders");
              fetchData("SHOULDERS");
            }}
          >
            <Text style={styles.bodyPartText}>SHOULDERS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setName("Triceps");
              fetchData("TRICEPS");
            }}
          >
            <Text style={styles.bodyPartText}>TRICEPS</Text>
          </TouchableOpacity>
        </View>

        {/* Back */}
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity
            onPress={() => {
              setName("Back");
              fetchData("BACK");
            }}
          >
            <Text style={styles.bodyPartText}>BACK</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setName("Forearms");
              fetchData("FOREARMS");
            }}
          >
            <Text style={styles.bodyPartText}>FOREARMS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setName("Biceps");
              fetchData("BICEPS");
            }}
          >
            <Text style={styles.bodyPartText}>BICEPS</Text>
          </TouchableOpacity>
        </View>


        {/* Core */}
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity
            onPress={() => {
              setName("Hips");
              fetchData("HIPS");
            }}
          >
            <Text style={styles.bodyPartText}>HIPS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setName("Waist");
              fetchData("WAIST");
            }}
          >
            <Text style={styles.bodyPartText}>WAIST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setName("Full Body");
              fetchData("FULL BODY");
            }}
          >
            <Text style={styles.bodyPartText}>FULL BODY</Text>
          </TouchableOpacity>
        </View>


        {/* Legs */}
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity
            onPress={() => {
              setName("Tights");
              fetchData("THIGHS");
            }}
          >
            <Text style={styles.bodyPartText}>THIGHS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setName("Hamstrings");
              fetchData("HAMSTRINGS");
            }}
          >
            <Text style={styles.bodyPartText}>HAMSTRINGS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setName("Quardriceps");
              fetchData("QUADRICEPS");
            }}
          >
            <Text style={styles.bodyPartText}>QUADRICEPS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setName("Calves");
              fetchData("CALVES");
            }}
          >
            <Text style={styles.bodyPartText}>CALVES</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 15 }}>You are looking for [{name}] exercise</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.exerciseId}
        style={{ marginTop: 20, marginBottom: 20, borderRadius: 10 }}
        renderItem={({ item }) => (
          <View style={styles.exerciseBox}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.imageBox}
            />
            <TouchableOpacity
              onPress={async () => {
                const saveData = {
                  id: item.exerciseId,
                  name: item.name,
                  bodyParts: item.bodyParts,
                  equipments: item.equipments,
                };
                try {
                  const key = `exercises_day${day}`;
                  const existing = await AsyncStorage.getItem(key);
                  const parsed = existing ? JSON.parse(existing) : [];

                  const updated = [...parsed, saveData];
                  await AsyncStorage.setItem(key, JSON.stringify(updated));

                  console.log(`✅ Added ${saveData.name} to Day ${day}`);
                } catch (e) {
                  console.error('Error saving exercise:', e);
                }
              }}
              style={styles.addToExerciseBTN}>
              <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Add to Exercise</Text>
            </TouchableOpacity>

          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => route.goBack()}
        style={styles.addToExerciseBTN}>
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E4E2"
  },
  imageBox: {
    width: width * 0.5,
    height: height * 0.14,
    marginBottom: 10,
    marginTop: 10,
  },
  exerciseBox: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    width: width * 0.95,
    height: height * 0.27,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addToExerciseBTN: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2CB9FF",
    width: 200,
    height: 40,
    borderRadius: 10,
  },
  categoriesBox: {
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: 'wrap',
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    width: width * 0.95,
    height: height * 0.15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 50,
  },
  bodyPartText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 5,

  },
})

export default ApiPage