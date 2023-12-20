import {useMemo, useEffect} from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens';

export type HomeStackParamList = {
  home: {title: string};
  freeModal: {title: string};
  calendarModal: {title: string};
};

const HomeRoutes = () => {
  const stack = createNativeStackNavigator<HomeStackParamList>();

  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="home" component={HomeScreen} />
    </stack.Navigator>
  );
};

export default HomeRoutes;

export type HomeScreenProps<T extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, T>;

export type HomeNavigationProp<t extends keyof HomeStackParamList> =
  HomeScreenProps<t>['navigation'];
export type HomeRouteProp<t extends keyof HomeStackParamList> =
  HomeScreenProps<t>['route'];
