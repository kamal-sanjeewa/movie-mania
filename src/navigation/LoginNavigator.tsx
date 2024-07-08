import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './constants/Screens.constants';
import SignIn from 'screens/SignIn';

const LoginStack = createStackNavigator();

export const LoginNavigator = () => {
  return (
    <LoginStack.Navigator initialRouteName={Screens.SignIn} screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name={Screens.SignIn} component={SignIn} />
    </LoginStack.Navigator>
  );
};
