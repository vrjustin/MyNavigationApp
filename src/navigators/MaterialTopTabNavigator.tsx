import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screen05 from '../screens/Screen05';
import Screen06 from '../screens/Screen06';
import Screen07 from '../screens/Screen07';

const Tab = createMaterialTopTabNavigator();

const MaterialTopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen05" component={Screen05} />
      <Tab.Screen name="Screen06" component={Screen06} />
      <Tab.Screen name="Screen07" component={Screen07} />
    </Tab.Navigator>
  );
};

export default MaterialTopTabNavigator;
