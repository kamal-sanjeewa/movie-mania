import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './constants/Screens.constants';
import DashboardScreen from 'screens/DashboardScreen';

const DashBoardStack = createStackNavigator();

export const LoginNavigator = () => {
  return (
    <DashBoardStack.Navigator
      initialRouteName={Screens.SignIn}
      screenOptions={{ headerShown: false }}
    >
      <DashBoardStack.Screen name={Screens.DashboardScreen} component={DashboardScreen} />
    </DashBoardStack.Navigator>
  );
};
