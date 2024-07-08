import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { strings } from 'assets/locales/i18n';
import { colors } from 'assets/constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { requestNewToken, requestTokenWithLogin } from 'redux/thunks/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/reducers';
import { movieManiaStyles } from 'assets/styles/movieManiaStyles';

const SignIn = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const requestToken = useSelector((state: State) => state.authentication.tokenData?.request_token);

  useEffect(() => {
    dispatch(requestNewToken());
  }, [dispatch]);

  const onLogin = () => {
    if (requestToken) {
      dispatch(
        requestTokenWithLogin({
          username: username,
          password: password,
          request_token: requestToken,
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{strings('appName')}</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder={strings('signIn.username')}
          placeholderTextColor={colors.lightGrey}
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder={strings('signIn.password')}
          placeholderTextColor={colors.lightGrey}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
        />
        <TouchableOpacity style={movieManiaStyles.buttonSolid} onPress={onLogin}>
          <Text style={movieManiaStyles.buttonSolidText}>{strings('signIn.login')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
    backgroundColor: colors.almostBlack,
  },
  title: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 40,
    color: colors.primaryColor,
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.primaryColor,
    color: colors.white,
    borderWidth: 1,
    borderRadius: 7,
  },
});

export default SignIn;
