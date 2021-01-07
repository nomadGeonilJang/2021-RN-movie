import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Fav from '../screens/Fav';

const TabNavigation = createBottomTabNavigator();
export default function Tab({ navigation, route }) {
  //   navigation.setOptions({
  //     title: 'Update the title',
  //   });

  useLayoutEffect(() => {
    const index = route.state?.index;
    const currentName = route.state?.routes[index].name;
    navigation.setOptions({
      title: currentName,
    });
  }, [route]);

  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen name="Movies" component={Movies} />
      <TabNavigation.Screen name="Tv" component={Tv} />
      <TabNavigation.Screen name="Search" component={Search} />
      <TabNavigation.Screen name="Favorit" component={Fav} />
    </TabNavigation.Navigator>
  );
}
