/* eslint-disable no-shadow */
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Platform } from 'react-native';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favorites from '../screens/Fav';

export default function Tab({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getFocusedRouteNameFromRoute(route),
      headerStyle: {},
      //   headerTintColor: 'white',
    });
  }, [route]);

  return (
    <TabNavigation.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <Ionicons
              name={getIconName({ osType: Platform.OS, name })}
              color={focused ? 'purple' : 'gray'}
              size={26}
            />
          );
        },
      })}
    >
      <TabNavigation.Screen name="Movies" component={Movies} />
      <TabNavigation.Screen name="TV" component={Tv} />
      <TabNavigation.Screen name="Search" component={Search} />
      <TabNavigation.Screen name="Favorites" component={Favorites} />
    </TabNavigation.Navigator>
  );
}

const getIconName = ({ osType, name }) => {
  const os = {
    ios: 'ios-',
    android: 'md-',
    windows: 'md-',
    macos: 'md-',
    web: 'md-',
  };

  const iconNameMap = {
    Movies: 'film',
    TV: 'tv',
    Search: 'search',
    Favorites: 'heart',
  };

  return `${os[osType] + iconNameMap[name]}`;
};
const TabNavigation = createBottomTabNavigator();
