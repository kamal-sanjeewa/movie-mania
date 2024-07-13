import { colors } from 'assets/constants/colors';
import { strings } from 'assets/locales/i18n';
import useFilteredMedia from 'hooks/useFilteredMedia.hook';
import { MediaItem } from 'models/movie';
import React from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView, Image, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const WatchListScreen = () => {
  const { movies } = useFilteredMedia(); // TODO: fetch data from WATCH list

  const renderMovieItem = ({ item }: { item: MediaItem }) => {
    return (
      <View style={styles.card}>
        <Image
          style={styles.thumbnail}
          source={{ uri: `${process.env.IMG_BASE_URL_600}${item.poster_path}` }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <Text style={styles.releaseDate}>
            {item.media_type === 'movie'
              ? strings('dashboard.releaseDate', { date: item.release_date })
              : strings('dashboard.firstAirDate', {
                  date: item.first_air_date,
                })}
          </Text>
          <Text style={styles.rating}>
            {strings('dashboard.rating', {
              rating: item.vote_average,
              votes: item.vote_count,
            })}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{strings('watchList.title')}</Text>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
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
    width: screenWidth - 20,
    height: (screenWidth - 20) * 1.5,
  },
  card: {
    backgroundColor: colors.lightBlack,
    borderRadius: 16,
    margin: 10,
    overflow: 'hidden',
    width: screenWidth - 20,
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
