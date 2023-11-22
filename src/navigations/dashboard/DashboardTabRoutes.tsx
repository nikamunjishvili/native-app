import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {colors} from '../../themes';
import {HomeScreen} from '../../screens';

export type RootDashboardTabParamList = {
  homeRoutes: undefined;
  map: {title: string};
  file: {title: string};
  filter: {title: string};
  chatRoutes: {title: string};
  bell: {title: string};
  userRoutes: undefined;
};

function TestScreen({route}: {route: any}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
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

  return (
    <Tab.Navigator
      initialRouteName="homeRoutes"
      screenOptions={({route: {name}}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.bgGray,
        },
        // tabBarIcon: () => {
        //     return (
        //         // <Icon iconName={getIconNameForTabs(name) as iconsName} color={focused ? colors.main : ""} />
        //     );
        // },
      })}>
      <Tab.Screen name={'homeRoutes'} component={HomeScreen} />
      <Tab.Screen name={'map'} component={TestScreen} initialParams={{ title: "map" }} />
      <Tab.Screen name={'file'} component={TestScreen} initialParams={{ title: "file" }} />
      <Tab.Screen name={'filter'} component={TestScreen}  initialParams={{ title: "filter" }} />
      <Tab.Screen name={'chatRoutes'} component={TestScreen} initialParams={{ title: "chatRoutes" }} />
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
