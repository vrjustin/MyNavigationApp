import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen05 from '../screens/Screen05';
import Screen06 from '../screens/Screen06';
import Screen07 from '../screens/Screen07';

const Tab = createBottomTabNavigator();

const BottomTabBarNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen05" component={Screen05} />
      <Tab.Screen name="Screen06" component={Screen06} />
      <Tab.Screen name="Screen07" component={Screen07} />
    </Tab.Navigator>
  );
};

export default BottomTabBarNavigator;
