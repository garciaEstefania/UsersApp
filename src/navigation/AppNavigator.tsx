import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './types';

import {HomeScreen} from '~screens/HomeScreen/HomeScreen';
import {ProfileScreen} from '~screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
