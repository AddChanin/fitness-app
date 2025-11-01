import React, { useState } from 'react'
import { StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SetCounter from "./component/setCounter";
import DayPage from "./component/DayPage";

export default function Index() {

  return (
    <SafeAreaView
      style={styles.container}
    >
      <SetCounter />
      <DayPage />
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E4E2",
    paddingTop: 50,
  },
  daysBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: width * 0.97,
    height: height * 0.1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  dayFont: {
    fontWeight: '800',
    fontSize: 36,
  },
});