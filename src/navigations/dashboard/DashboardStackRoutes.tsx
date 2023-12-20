import {NavigatorScreenParams} from '@react-navigation/native';
import DashboardTabRoutes, {
  RootDashboardTabParamList,
} from './DashboardTabRoutes';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import SearchScreen from '../../screens/search/SearchScreen';

export type RootStackParamList = {
  dashboardTabRoutes: NavigatorScreenParams<RootDashboardTabParamList>;
  home: {home: string};
  profile: {search: string};
  search: {notifications: string};
};

const DashboardStackRoutes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="dashboardTabRoutes"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="dashboardTabRoutes" component={DashboardTabRoutes} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStackRoutes;

export type DashboardStackScreensProps<t extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, t>;

export type DashboardStackNavigationProp<t extends keyof RootStackParamList> =
  DashboardStackScreensProps<t>['navigation'];
export type DashboardStackRouteProp<t extends keyof RootStackParamList> =
  DashboardStackScreensProps<t>['route'];
