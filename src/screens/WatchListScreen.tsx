import { colors } from 'assets/constants/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WatchListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WachListScreen</Text>
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

export default WatchListScreen;
