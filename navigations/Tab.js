import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favorites from '../screens/Fav';

export default function Tab({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getFocusedRouteNameFromRoute(route),
    });
  }, [route]);

  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen name="Movies" component={Movies} />
      <TabNavigation.Screen name="TV" component={Tv} />
      <TabNavigation.Screen name="Search" component={Search} />
      <TabNavigation.Screen name="Favorites" component={Favorites} />
    </TabNavigation.Navigator>
  );
}

const TabNavigation = createBottomTabNavigator();
