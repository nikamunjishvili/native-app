import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Modal = () => {
  return (
    <View style={styles.container}>
      <Text>Modal</Text>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
