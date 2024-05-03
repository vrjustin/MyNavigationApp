import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen03 from '../screens/Screen03';
import Screen03Details from '../screens/Screen03Details';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen03" component={Screen03} />
      <Stack.Screen name="Screen03Details" component={Screen03Details} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
