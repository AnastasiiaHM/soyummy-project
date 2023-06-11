import {
  fetchFavoriteRecipes,
  deleteFavoriteRecipe,
} from 'redux/favorite/operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
  totalPages: 0,
  currentPage: 1,
  loading: false,
  error: null,
};

const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.recipes = payload.recipes;
        state.currentPage = payload.currentPage;
        state.totalPages = payload.totalPages;
        state.loading = false;
      })
      .addCase(fetchFavoriteRecipes.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoriteRecipes.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteFavoriteRecipe.fulfilled, (state, { payload }) => {
        state.recipes = state.recipes.filter(recipe => recipe._id !== payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteFavoriteRecipe.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFavoriteRecipe.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export default favoriteRecipesSlice.reducer;
