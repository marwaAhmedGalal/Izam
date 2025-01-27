import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default is localStorage
import itemReducer from './Reducers/itemSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, itemReducer);

const store = configureStore({
  reducer: {
    items: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
