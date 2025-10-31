import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkoutSet = () => {
  const STORAGE_KEY = `@workout_sets_${''}`; // Unique key per exercise

  const [info, setInfo] = useState([
    { weight: '0', reps: '0', sets: '0' },
  ]);

  // Load saved sets for THIS specific exercise
  useEffect(() => {
    const loadSets = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          setInfo(JSON.parse(saved));
        }
      } catch (e) {
        console.log('Error loading sets:', e);
      }
    };
    loadSets();
  }, []); // Reload when exerciseKey changes

  // Save sets for THIS specific exercise
  const saveSets = async (updatedSets: any) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSets));
    } catch (e) {
      console.log('Error saving sets:', e);
    }
  };

  // Handle change for weight, reps, and sets
  const handleChange = (index: number, field: 'weight' | 'reps' | 'sets', value: string) => {
    const updatedSets = [...info];
    updatedSets[index][field] = value;
    setInfo(updatedSets);
    saveSets(updatedSets);
  };

  return (
    <View>
      {info.map((set, index) => (
        <View key={index} style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            // placeholder="Weight"
            keyboardType="decimal-pad"
            onChangeText={(value) => handleChange(index, 'weight', value)}
            value={set.weight}
          />
          <Text style={styles.label}>KG</Text>

          <Text>✕</Text>

          <TextInput
            style={styles.input}
            // placeholder="Reps"
            keyboardType="decimal-pad"
            onChangeText={(value) => handleChange(index, 'reps', value)}
            value={set.reps}
          />
          <Text style={styles.label}>REPS</Text>

          <Text>✕</Text>

          <TextInput
            style={styles.input}
            // placeholder="Sets"
            keyboardType="decimal-pad"
            onChangeText={(value) => handleChange(index, 'sets', value)}
            value={set.sets}
          />
          <Text style={styles.label}>SETS</Text>
        </View>
      ))}
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  inputGroup: {
    backgroundColor: '#EFEFEF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    paddingHorizontal: 15,
    width: width * 0.7,
    height: height * 0.05,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#D4D4D4',
    borderRadius: 8,
    paddingVertical: 8,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    width: '15%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default WorkoutSet;