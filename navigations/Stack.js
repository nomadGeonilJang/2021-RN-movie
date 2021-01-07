import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from '../screens/Detail';
import Tab from './Tab';

const StackNavigation = createStackNavigator();

export default function Stack() {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen name="Movies" component={Tab} />
      <StackNavigation.Screen name="Detail" component={Detail} />
    </StackNavigation.Navigator>
  );
}
