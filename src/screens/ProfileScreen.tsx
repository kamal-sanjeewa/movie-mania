import { colors } from 'assets/constants/colors';
import { strings } from 'assets/locales/i18n';
import { movieManiaStyles } from 'assets/styles/movieManiaStyles';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthenticationAction } from 'redux/actions/authentication';
import { State } from 'redux/reducers';
import { fetchProfileData } from 'redux/thunks/fetchProfileData';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state: State) => state.profile.data);

  useEffect(() => {
    dispatch(fetchProfileData('21353076')); //TODO: app to pass the user id to fetch the user account
  }, [dispatch]);

  if (!userProfile) {
    return (
      <View style={styles.container}>
        <Text>User Profile Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings('profile.title')}</Text>
      <View style={styles.profileHeader}>
        <Image
          style={styles.avatar}
          source={{ uri: `${process.env.AVATAR_BASE_URL}/${userProfile.avatar.gravatar.hash}` }}
        />
      </View>
      <Text style={styles.text}>{strings('profile.id', { id: userProfile.id })}</Text>
      <Text style={styles.text}>{strings('profile.name', { username: userProfile.username })}</Text>
      <Text style={styles.text}>
        {strings('profile.language', { language: userProfile.iso_639_1 })}
      </Text>
      <Text style={styles.text}>
        {strings('profile.country', { country: userProfile.iso_3166_1 })}
      </Text>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => dispatch(AuthenticationAction.unsetToken())}
      >
        <Text style={movieManiaStyles.buttonSolidText}>{strings('profile.logout')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.almostBlack,
    padding: 20,
  },
  profileHeader: {
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.primaryColor,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.white,
  },
  logoutButton: {
    ...movieManiaStyles.buttonSolid,
    marginTop: 16,
  },
});

export default ProfileScreen;
