import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation/RootNavigaator';

const MovieMania = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default MovieMania;
