import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigators } from './constants/Navigators.constants';
import { LoginNavigator } from './LoginNavigator';
import { BottomTabNavigator } from './BottomTabNavigator';
import { State } from 'redux/reducers';
import { useSelector } from 'react-redux';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  const isLoggedIn = useSelector(
    (state: State) => state.authentication.loginTokenData?.request_token,
  );

  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false, headerMode: 'screen' }}
    >
      {isLoggedIn ? (
        <RootStack.Screen
          name={Navigators.BottomTab}
          component={BottomTabNavigator}
        />
      ) : (
        <RootStack.Screen name={Navigators.Login} component={LoginNavigator} />
      )}
    </RootStack.Navigator>
  );
};
