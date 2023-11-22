import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreenLayout = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreenLayout</Text>
    </View>
  );
};

export default HomeScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
