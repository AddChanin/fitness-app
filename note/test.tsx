// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AddButton from './addButton';
// import { useFocusEffect } from '@react-navigation/native';

// const Test = () => {
//   const [day1Exercises, setDay1Exercises] = useState([]);
//   const [day2Exercises, setDay2Exercises] = useState([]);
//   const [day3Exercises, setDay3Exercises] = useState([]);

//   const loadExercises = async () => {
//     try {
//       // Load Day 1
//       const day1Data = await AsyncStorage.getItem('exercises_day1');
//       if (day1Data) {
//         setDay1Exercises(JSON.parse(day1Data));
//       }

//       // Load Day 2
//       const day2Data = await AsyncStorage.getItem('exercises_day2');
//       if (day2Data) {
//         setDay2Exercises(JSON.parse(day2Data));
//       }

//       // Load Day 3
//       const day3Data = await AsyncStorage.getItem('exercises_day3');
//       if (day3Data) {
//         setDay3Exercises(JSON.parse(day3Data));
//       }
//     } catch (error) {
//       console.error('Error loading exercises:', error);
//     }
//   };

//   // Use useFocusEffect to reload data when returning from ApiPage
//   useFocusEffect(
//     React.useCallback(() => {
//       loadExercises();
//     }, [])
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Day 1 */}
//       <View style={styles.dayBox}>
//         <Text style={styles.dayTitle}>Day 1 Exercises:</Text>
//         {day1Exercises.map((ex, i) => (
//           <View key={i} style={styles.exerciseItem}>
//             <Text style={styles.exerciseName}>{ex.name}</Text>
//             {/* <Text style={styles.exerciseDetail}>Body Part: {ex.bodyParts}</Text>
//             <Text style={styles.exerciseDetail}>Equipment: {ex.equipments}</Text> */}
//           </View>
//         ))}
//         <AddButton day={1}/>
//       </View>

//       {/* Day 2 */}
//       <View style={styles.dayBox}>
//         <Text style={styles.dayTitle}>Day 2 Exercises:</Text>
//         {day2Exercises.map((ex, i) => (
//           <View key={i} style={styles.exerciseItem}>
//             <Text style={styles.exerciseName}>{ex.name}</Text>
//             <Text style={styles.exerciseDetail}>Body Part: {ex.bodyParts}</Text>
//             <Text style={styles.exerciseDetail}>Equipment: {ex.equipments}</Text>
//           </View>
//         ))}
//         <AddButton day={2}/>
//       </View>

//       {/* Day 3 */}
//       <View style={styles.dayBox}>
//         <Text style={styles.dayTitle}>Day 3 Exercises:</Text>
//         {day3Exercises.map((ex, i) => (
//           <View key={i} style={styles.exerciseItem}>
//             <Text style={styles.exerciseName}>{ex.name}</Text>
//             <Text style={styles.exerciseDetail}>Body Part: {ex.bodyParts}</Text>
//             <Text style={styles.exerciseDetail}>Equipment: {ex.equipments}</Text>
//           </View>
//         ))}
//         <AddButton day={3}/>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E5E4E2',
//     padding: 20,
//   },
//   dayBox: {
//     backgroundColor: 'white',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   dayTitle: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   exerciseItem: {
//     marginBottom: 10,
//     paddingBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E4E2',
//   },
//   exerciseName: {
//     fontWeight: 'bold',
//     fontSize: 14,
//     marginBottom: 3,
//   },
//   exerciseDetail: {
//     fontSize: 12,
//     color: '#666',
//   },
// });

// export default Test;