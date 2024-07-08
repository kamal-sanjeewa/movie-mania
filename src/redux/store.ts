import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AppStore = ReturnType<typeof _configureStore>['store'];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

const persistor = persistStore(store);

export default function _configureStore() {
  return { store, persistor };
}
