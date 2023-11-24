import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {WelcomeScreen} from '../../screens';
import RegistrationLayout from '../../components/layouts/RegistrationLayout';

type RootStackParamList = {
  registration: {selectedUserKey: string};
  welcome: undefined;
};

function OnBoardingRoutes() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName={'welcome'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'welcome'} component={WelcomeScreen} />
      <Stack.Screen name={'registration'} component={RegistrationLayout} />
    </Stack.Navigator>
  );
}

export default OnBoardingRoutes;

export type OnBoardingScreensProps<t extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, t>;
export type OnBoardingNavigationProp<t extends keyof RootStackParamList> =
  OnBoardingScreensProps<t>['navigation'];
export type OnBoardingRouteProp<t extends keyof RootStackParamList> =
  OnBoardingScreensProps<t>['route'];
