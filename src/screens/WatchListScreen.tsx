import { colors } from 'assets/constants/colors';
import { strings } from 'assets/locales/i18n';
import React from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const WatchListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{strings('dashboard.trendingMovies')}</Text>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={renderMovieItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.almostBlack,
  },
  title: {
    color: colors.primaryColor,
    fontSize: 24,
    marginLeft: 16,
    marginTop: 16,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  card: {
    backgroundColor: colors.lightBlack,
    borderRadius: 16,
    margin: 10,
    overflow: 'hidden',
    width: 300,
  },
  movieTitle: {
    color: colors.primaryColor,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
  },
  rating: {
    color: colors.white,
    fontSize: 14,
    marginTop: 5,
  },
  infoContainer: {
    padding: 10,
  },
  releaseDate: {
    color: colors.white,
    fontSize: 14,
  },
});

export default WatchListScreen;
