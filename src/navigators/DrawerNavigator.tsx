import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screen01 from '../screens/Screen01';
import Screen02 from '../screens/Screen02';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Screen01" component={Screen01} />
      <Drawer.Screen name="Screen02" component={Screen02} />
      <Drawer.Screen name="ExampleStack" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
