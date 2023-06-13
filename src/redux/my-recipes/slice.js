import { createSlice } from '@reduxjs/toolkit';
import { deleteOwnRecipe, fetchOwnRecipes } from './operations';

const initialState = {
  recipes: [],
  totalPages: 0,
  totalRecords: 0,
  currentPage: 1,
  loading: false,
  error: null,
  itemsPerPage: 4,
};

const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchOwnRecipes.fulfilled, (state, { payload }) => {
        state.recipes = payload.recipes;
        state.currentPage = payload.currentPage;
        state.totalPages = Math.ceil(payload.totalRecipes / state.itemsPerPage);
        state.totalRecords = payload.totalRecipes;
        state.loading = false;
      })
      .addCase(fetchOwnRecipes.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOwnRecipes.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteOwnRecipe.fulfilled, (state, { payload }) => {
        state.recipes = state.recipes.filter(recipe => recipe._id !== payload);
        state.totalRecords = state.totalRecords - 1;
        state.totalPages = Math.ceil(state.totalRecords / state.itemsPerPage);
        state.currentPage =
          state.currentPage < state.totalPages
            ? state.currentPage
            : state.totalPages;
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteOwnRecipe.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOwnRecipe.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export default ownRecipesSlice.reducer;
