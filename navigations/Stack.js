import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const StackNavigation = createStackNavigator();

export default function Stack() {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen name="Home" component={Home} />
      <StackNavigation.Screen name="Detail" component={Detail} />
    </StackNavigation.Navigator>
  );
}
