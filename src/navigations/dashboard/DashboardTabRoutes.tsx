import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {colors} from '../../themes';
import HomeRoutes from '../home/HomeRoutes';
import {Icon} from '../../components/_atoms';
import {iconsName} from '../../components/_atoms/icons';
import ProfileScreen from '../../screens/profile/ProfileScreen';

export type RootDashboardTabParamList = {
  homeRoutes: {title: string};
  chat: {title: string};
  bell: {title: string};
  Profile: {title: string};
};

function TestScreen({route}: {route: any}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>{route.params.title}</Text>
    </View>
  );
}

const DashboardTabRoutes = () => {
  const Tab = createBottomTabNavigator<RootDashboardTabParamList>();

  const getIconNameForTabs = (name: string) => {
    switch (name) {
      case 'homeRoutes': {
        return 'home';
      }
      case 'chat': {
        return 'chat';
      }
      case 'Profile': {
        return 'user';
      }
      default: {
        return name;
      }
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="homeRoutes"
      screenOptions={({route: {name}}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.bgGray,
        },
        tabBarIcon: ({focused}) => {
          return (
            <Icon
              iconName={getIconNameForTabs(name) as iconsName}
              color={focused ? colors.main : ''}
              width={32}
              height={32}
            />
          );
        },
      })}>
      <Tab.Screen
        name={'homeRoutes'}
        component={HomeRoutes}
        initialParams={{title: 'homeRoutes'}}
      />
      <Tab.Screen
        name={'chat'}
        component={TestScreen}
        initialParams={{title: 'chatRoutes'}}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        initialParams={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default DashboardTabRoutes;

export type DashboardTabScreensProps<
  t extends keyof RootDashboardTabParamList,
> = NativeStackScreenProps<RootDashboardTabParamList, t>;

export type DashboardTabNavigationProp<
  t extends keyof RootDashboardTabParamList,
> = DashboardTabScreensProps<t>['navigation'];
export type DashboardTabRouteProp<t extends keyof RootDashboardTabParamList> =
  DashboardTabScreensProps<t>['route'];

interface StyleProps {
  focused?: boolean;
}

const styles = StyleSheet.create((props: StyleProps) => ({
  filterIconWrapper: {
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 50,
    marginBottom: 45,
  },
  filterIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: props.focused ? colors.main : '#71a5ff',
    borderRadius: 50,
  },
}));
