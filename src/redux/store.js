import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducerAuth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    // auth: persistedReducerAuth,
    // recipes: recipesReducer,
    // shoppingList: shoppingListReducer,
    // mainRecipes: mainRecipeReduser,
    // favoriteRecipes: favoriteRecipesReducer,
    // myRecipes: myRecipesReducer,
    // ingredients: ingredientsReducer,
    // search: searchReducer,
    // categories: categoriesReducer,
    // subscribe: subscribeReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
