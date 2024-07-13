import { colors } from 'assets/constants/colors';
import { strings } from 'assets/locales/i18n';
import useFilteredMedia from 'hooks/useFilteredMedia.hook';
import { MediaItem } from 'models/movie';
import React, { useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, Image, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { fetchTrendingData } from 'redux/thunks/fetchMovieData';

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const { movies, tvSeries } = useFilteredMedia();

  useEffect(() => {
    dispatch(fetchTrendingData('day'));
  }, [dispatch]);

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
      <ScrollView>
        <Text style={styles.title}>{strings('dashboard.trendingMovies')}</Text>
        <FlatList
          data={movies}
          keyExtractor={item => item.id.toString()}
          horizontal
          renderItem={renderMovieItem}
        />
        <Text style={styles.title}>{strings('dashboard.trendingTV')}</Text>
        <FlatList
          data={tvSeries}
          keyExtractor={item => item.id.toString()}
          horizontal
          renderItem={renderMovieItem}
        />
      </ScrollView>
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

export default DashboardScreen;
