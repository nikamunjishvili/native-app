/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store/store/index';
import AppProviderLayout from './src/components/layouts/AppProviderLayout';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <DashboardTabRoutes /> */}
        <AppProviderLayout />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
