import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const AddButton = ({ day }: { day: number }) => {
  return (
    <View>
      <Link href={{ pathname: "/component/apiPage" , params: { day } }} asChild>
        <TouchableOpacity
          style={styles.addExercoseButton}>
          <Text style={{ color: '#006CD0', fontWeight: 'bold' }}>+ Add Excercise for Day {day}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
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
});

export default AddButton