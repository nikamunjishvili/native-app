import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View style={styles.container}>
      <Text>Button</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  