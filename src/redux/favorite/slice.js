import {
  fetchFavoriteRecipes,
  deleteFavoriteRecipe,
} from 'redux/favorite/operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
  totalPages: 0,
  totalRecords: 0,
  currentPage: 1,
  loading: false,
  error: null,
  itemsPerPage: 2
};

const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.recipes = payload.recipes;
        state.currentPage = payload.currentPage;
        state.totalPages = Math.ceil(payload.totalRecipes / state.itemsPerPage);
        state.totalRecords = payload.totalRecipes;
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
        state.totalRecords = state.totalRecords - 1;
        state.totalPages = Math.ceil(state.totalRecords / state.itemsPerPage);
        state.currentPage = state.currentPage < state.totalPages ? state.currentPage : state.totalPages;
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
