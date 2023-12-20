/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store/store/index';
import AppProviderLayout from './src/components/layouts/AppProviderLayout';
import {PersistGate} from 'redux-persist/integration/react';
import {Loader} from './src/components';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate
          persistor={persistor}
          // loading={<Loader loadingText="Loading, please wait..." />}
        >
          <AppProviderLayout />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
