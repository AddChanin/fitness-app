import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Checkbox } from 'expo-checkbox';



const SetCounter = () => {
  const [isChecked, setChecked] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });

  return (
    <View>

      <View style={[styles.section, sharedStyles.shadow]}>
        <Text style={{ fontWeight: 'bold', marginRight: 5}}> Counter</Text>
        <Checkbox
          style={styles.checkbox}
          value={isChecked.one}
          onValueChange={(value) => setChecked({ ...isChecked, one: value })}
          color={isChecked.one ? '#00D065' : undefined}
        />

        <Checkbox
          style={styles.checkbox}

          value={isChecked.two}
          onValueChange={(value) => setChecked({ ...isChecked, two: value })}
          color={isChecked.two ? '#00D065' : undefined}
        />

        <Checkbox
          style={styles.checkbox}
          value={isChecked.three}
          onValueChange={(value) => setChecked({ ...isChecked, three: value })}
          color={isChecked.three ? '#00D065' : undefined}
        />

        <Checkbox
          style={styles.checkbox}
          value={isChecked.four}
          onValueChange={(value) => setChecked({ ...isChecked, four: value })}
          color={isChecked.four ? '#00D065' : undefined}
        />

        <Checkbox
          style={styles.checkbox}
          value={isChecked.five}
          onValueChange={(value) => setChecked({ ...isChecked, five: value })}
          color={isChecked.five ? '#00D065' : undefined}
        />

        <Checkbox
          style={styles.checkbox}
          value={isChecked.six}
          onValueChange={(value) => setChecked({ ...isChecked, six: value })}
          color={isChecked.six ? '#00D065' : undefined}
        />

      </View>

    </View>
  )
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89CFF0',
    width: width * 0.95,
    height: height * 0.05,
    borderRadius: 10,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    width: 30,
    height: 30
  },
});
const sharedStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  }
})
export default SetCounter