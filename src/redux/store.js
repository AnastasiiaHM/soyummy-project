import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import recipesIdSlice from './id-recipes/slice';
import shoppingList from './shopping-list/slice';
import categories from './recipes/slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import favoriteRecipesReducer from './favorite/slice';
import { searchReducer } from './search/slice';
import ownRecipesReducer from './my-recipes/slice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const persistedReducerAuth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducerAuth,
    recipesId: recipesIdSlice,
    shoppingList,
    // mainRecipes: mainRecipeReduser,
    favoriteRecipes: favoriteRecipesReducer,
    ownRecipes: ownRecipesReducer,
    // ingredients: ingredientsReducer,
    search: searchReducer,
    categories,
    // subscribe: subscribeReducer,
  },
  preloadedState: loadState(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

store.subscribe(() => {
  try {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {}
});

export const persistor = persistStore(store);
