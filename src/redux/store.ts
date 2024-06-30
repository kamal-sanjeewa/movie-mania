import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { persistStore } from 'redux-persist';

export type AppStore = ReturnType<typeof _configureStore>['store'];

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

const persistor = persistStore(store as any);

export default function _configureStore() {
  return { store, persistor };
}
