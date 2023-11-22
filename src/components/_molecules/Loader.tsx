import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text>Loader</Text>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  