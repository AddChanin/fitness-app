import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from "expo-checkbox";
import WorkoutSet from './workoutSet';
import AddButton from './addButton';
import DeleteButton from './deleteButton';

const DayPage = () => {

  // Array to store data only day 1
  // Need to duplicate to 7 day by create more array and update fetch function as well
  const [day1Exercises, setDay1Exercises] = useState<any[]>([]);
  const [day2Exercises, setDay2Exercises] = useState<any[]>([]);
  const [day3Exercises, setDay3Exercises] = useState<any[]>([]);
  const [day4Exercises, setDay4Exercises] = useState<any[]>([]);
  const [day5Exercises, setDay5Exercises] = useState<any[]>([]);
  const [day6Exercises, setDay6Exercises] = useState<any[]>([]);
  const [day7Exercises, setDay7Exercises] = useState<any[]>([]);

  const loadExercises = async () => {
    try {
      // Load Day 1
      const day1Data = await AsyncStorage.getItem('exercises_day1');
      if (day1Data) {
        setDay1Exercises(JSON.parse(day1Data));
      }

      // Load Day 2
      const day2Data = await AsyncStorage.getItem('exercises_day2');
      if (day2Data) {
        setDay2Exercises(JSON.parse(day2Data));
      }

      // Load Day 3
      const day3Data = await AsyncStorage.getItem('exercises_day3');
      if (day3Data) {
        setDay3Exercises(JSON.parse(day3Data));
      }

      // Load Day 4
      const day4Data = await AsyncStorage.getItem('exercises_day4');
      if (day4Data) {
        setDay4Exercises(JSON.parse(day4Data));
      }

      // Load Day 5
      const day5Data = await AsyncStorage.getItem('exercises_day5');
      if (day5Data) {
        setDay5Exercises(JSON.parse(day5Data));
      }

      // Load Day 6
      const day6Data = await AsyncStorage.getItem('exercises_day6');
      if (day6Data) {
        setDay6Exercises(JSON.parse(day6Data));
      }
      // Load Day 7
      const day7Data = await AsyncStorage.getItem('exercises_day7');
      if (day7Data) {
        setDay7Exercises(JSON.parse(day7Data));
      }

    } catch (error) {
      console.error('Error loading exercises:', error);
    }
  };
  // Load data when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      // fetchDataFromAnotherScreen();
      loadExercises();
    }, [])
  );

  // Other Function
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  // Toggle checkbox per item
  const toggleCheckbox = (key: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const deleteData = async (day: number, exerciseId: string) => {
    try {
      const key = `exercises_day${day}`;
      const existingData = await AsyncStorage.getItem(key);

      if (existingData) {
        const parsed = JSON.parse(existingData);
        // Filter out the exercise with matching id
        const updated = parsed.filter((ex: any) => ex.id !== exerciseId);

        // Save back to AsyncStorage
        await AsyncStorage.setItem(key, JSON.stringify(updated));

        // Delete associated workout sets
        await AsyncStorage.removeItem(`@workout_sets_${exerciseId}`);

        // Update local state
        if (day === 1) {
          setDay1Exercises(updated);
        } else if (day === 2) {
          setDay2Exercises(updated);
        } else if (day === 3) {
          setDay3Exercises(updated);
        } else if (day === 4) {
          setDay4Exercises(updated);
        } else if (day === 5) {
          setDay5Exercises(updated);
        } else if (day === 6) {
          setDay6Exercises(updated);
        } else if (day === 7) {
          setDay7Exercises(updated);
        }

        console.log(`✅ Deleted exercise ${exerciseId} from Day ${day}`);
      }
    } catch (e) {
      console.error('Error deleting data:', e);
    }
  };

  return (

    <ScrollView contentContainerStyle={styles.container}>


      {/* Day 1 section only. Need to duplicate this to 7 day */}
      <Text style={{ fontWeight: '900', fontSize: 36 }}> DAY 1</Text>
      {day1Exercises.map((item, index) => (
        <View key={item.id || index}>
          <View style={styles.exerciseBox}>
            <View style={styles.titleBox}>
              <Checkbox
                value={checkedItems[item.key] || false}
                onValueChange={() => toggleCheckbox(item.key)}
                color={checkedItems[item.key] ? '#00D065' : undefined}
              ></Checkbox>
                <Text style={{ color: '', fontWeight: 'bold' }}>{item.name}</Text>
                <View></View>
            </View>
            <View style={styles.expandedBox}>
              <WorkoutSet />
              <DeleteButton onPress={() => deleteData(1, item.id)} />
            </View>
          </View>
        </View>
      ))}
      <AddButton day={1} />

      <Text style={{ fontWeight: '900', fontSize: 36 }}> DAY 2</Text>
      {day2Exercises.map((item, index) => (
        <View key={item.id || index}>
          <View style={styles.exerciseBox}>
            <View style={styles.titleBox}>
              <Checkbox
                value={checkedItems[item.key] || false}
                onValueChange={() => toggleCheckbox(item.key)}
                color={checkedItems[item.key] ? '#00D065' : undefined}
              ></Checkbox>
                <Text style={{ color: '', fontWeight: 'bold' }}>{item.name}</Text>
                <View></View>
            </View>
            <View style={styles.expandedBox}>
              <WorkoutSet />
              <DeleteButton onPress={() => deleteData(2, item.id)} />
            </View>
          </View>
        </View>
      ))}
      <AddButton day={2} />

      <Text style={{ fontWeight: '900', fontSize: 36 }}> DAY 3</Text>
      {day3Exercises.map((item, index) => (
        <View key={item.id || index}>
          <View style={styles.exerciseBox}>
            <View style={styles.titleBox}>
              <Checkbox
                value={checkedItems[item.key] || false}
                onValueChange={() => toggleCheckbox(item.key)}
                color={checkedItems[item.key] ? '#00D065' : undefined}
              ></Checkbox>
                <Text style={{ color: '', fontWeight: 'bold' }}>{item.name}</Text>
                <View></View>
            </View>
            <View style={styles.expandedBox}>
              <WorkoutSet />
              <DeleteButton onPress={() => deleteData(3, item.id)} />
            </View>
          </View>
        </View>
      ))}
      <AddButton day={3} />

      <Text style={{ fontWeight: '900', fontSize: 36 }}> DAY 4</Text>
      {day4Exercises.map((item, index) => (
        <View key={item.id || index}>
          <View style={styles.exerciseBox}>
            <View style={styles.titleBox}>
              <Checkbox
                value={checkedItems[item.key] || false}
                onValueChange={() => toggleCheckbox(item.key)}
                color={checkedItems[item.key] ? '#00D065' : undefined}
              ></Checkbox>
                <Text style={{ color: '', fontWeight: 'bold' }}>{item.name}</Text>
                <View></View>
            </View>
            <View style={styles.expandedBox}>
              <WorkoutSet />
              <DeleteButton onPress={() => deleteData(4, item.id)} />
            </View>
          </View>
        </View>
      ))}
      <AddButton day={4} />

      <Text style={{ fontWeight: '900', fontSize: 36 }}> DAY 5</Text>
      {day5Exercises.map((item, index) => (
        <View key={item.id || index}>
          <View style={styles.exerciseBox}>
            <View style={styles.titleBox}>
              <Checkbox
                value={checkedItems[item.key] || false}
                onValueChange={() => toggleCheckbox(item.key)}
                color={checkedItems[item.key] ? '#00D065' : undefined}
              ></Checkbox>
                <Text style={{ color: '', fontWeight: 'bold' }}>{item.name}</Text>
                <View></View>
            </View>
            <View style={styles.expandedBox}>
              <WorkoutSet />
              <DeleteButton onPress={() => deleteData(5, item.id)} />
            </View>
          </View>
        </View>
      ))}
      <AddButton day={5} />

      <Text style={{ fontWeight: '900', fontSize: 36 }}> DAY 6</Text>
      {day6Exercises.map((item, index) => (
        <View key={item.id || index}>
          <View style={styles.exerciseBox}>
            <View style={styles.titleBox}>
              <Checkbox
                value={checkedItems[item.key] || false}
                onValueChange={() => toggleCheckbox(item.key)}
                color={checkedItems[item.key] ? '#00D065' : undefined}
              ></Checkbox>
                <Text style={{ color: '', fontWeight: 'bold' }}>{item.name}</Text>
                <View></View>
            </View>
            <View style={styles.expandedBox}>
              <WorkoutSet />
              <DeleteButton onPress={() => deleteData(6, item.id)} />
            </View>
          </View>
        </View>
      ))}
      <AddButton day={6} />

      <Text style={{ fontWeight: '900', fontSize: 36 }}> DAY 7</Text>
      {day7Exercises.map((item, index) => (
        <View key={item.id || index}>
          <View style={styles.exerciseBox}>
            <View style={styles.titleBox}>
              <Checkbox
                value={checkedItems[item.key] || false}
                onValueChange={() => toggleCheckbox(item.key)}
                color={checkedItems[item.key] ? '#00D065' : undefined}
              ></Checkbox>
                <Text style={{ color: '', fontWeight: 'bold' }}>{item.name}</Text>
                <View></View>

            </View>
            <View style={styles.expandedBox}>
              <WorkoutSet />
              <DeleteButton onPress={() => deleteData(7, item.id)} />
            </View>
          </View>
        </View>
      ))}
      <AddButton day={7} />

    </ScrollView>
  )
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E4E2"
  },
  addExercoseButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: width * 0.90,
    height: height * 0.05,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  exerciseBox: {
    width: width * 0.9,
    height: height * 0.11,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 10,
  },

  titleBox: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expandedBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
  },
  contentText: {
    padding: 15,
  },
  dayText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 36,
  },
});
export default DayPage