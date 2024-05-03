import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen04 from '../screens/Screen04';
import Screen04Details from '../screens/Screen04Details';

const NativeStack = createNativeStackNavigator();

const NativeStackNavigator = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Screen04" component={Screen04} />
      <NativeStack.Screen name="Screen04Details" component={Screen04Details} />
    </NativeStack.Navigator>
  );
};

export default NativeStackNavigator;
