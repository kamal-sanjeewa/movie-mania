import React from 'react';
import MovieMania from './src/MovieMania';
import { Provider } from 'react-redux';
import configureStore from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-devsettings';

const { store, persistor } = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MovieMania />
      </PersistGate>
    </Provider>
  );
};

export default App;
