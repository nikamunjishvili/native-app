/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet} from 'react-native';
import DashboardTabRoutes from './src/navigations/dashboard/DashboardTabRoutes';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
    <DashboardTabRoutes />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});

export default App;
