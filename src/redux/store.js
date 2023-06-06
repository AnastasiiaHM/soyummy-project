import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { ModalOpenedReducer } from './modalOpenedSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { loadingReducer } from './loader/slice';
import { addProductModalReducer } from './ModalAddProductOpened/slice';
import { userReducer } from './user/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, userReducer),
    user: userReducer,
    modalopened: ModalOpenedReducer,
    loading: loadingReducer,
    addproductmodalopened: addProductModalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
