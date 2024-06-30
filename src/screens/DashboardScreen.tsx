import { colors } from 'assets/constants/colors';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchTrendingData } from 'redux/thunks/fetchMovieData';

// create a component
const DashboardScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingData('day'));
  }, []);

  return (
    <View style={styles.container}>
      <Text>DashboardScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.almostBlack,
  },
});

export default DashboardScreen;
