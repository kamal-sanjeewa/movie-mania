import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from 'assets/constants/colors';
import { Platform, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Screens } from './constants/Screens.constants';
import DashboardScreen from 'screens/DashboardScreen';
import WatchListScreen from 'screens/WatchListScreen';
import ProfileScreen from 'screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();
const iPhoneSE =
  Platform.OS === 'ios' &&
  !DeviceInfo.hasNotch() &&
  !DeviceInfo.hasDynamicIsland();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      backBehavior={'initialRoute'}
      screenOptions={{
        tabBarStyle: [
          styles.tabBar,
          Platform.OS === 'android' && styles.tabBarAndroid,
        ],
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.lightGrey,
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name={Screens.DashboardScreen}
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
        }}
      />
      <BottomTab.Screen
        name={Screens.WatchListScreen}
        component={WatchListScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Watch List',
        }}
      />
      <BottomTab.Screen
        name={Screens.ProfileScreen}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  // labelBase: {
  //   // ...sunshineStyles.regularSmall,
  //   color: colors.primaryColor,
  //   marginTop: 6,
  // },
  // labelFocused: {
  //   // ...sunshineStyles.boldPro,
  //   color: colors.almostBlack,
  // },
  tabBar: {
    // ...sunshineStyles.shadowTabbar,
    height: 86,
    backgroundColor: colors.almostBlack,
    borderTopWidth: 0,
    paddingTop: 16,
  },
  tabBarAndroid: { height: 80, paddingBottom: 16 },
  // icon: { height: 24, width: 24 },
});