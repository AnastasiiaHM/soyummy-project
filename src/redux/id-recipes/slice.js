import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRecipeById,
} from './operations';

const initialState = {
  recipeById: {},
  items: [],
  isLoading: false,
  error: null,
};

export const recipesIdSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
            .addCase(fetchRecipeById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRecipeById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.recipeById = action.payload;
            })
            .addCase(fetchRecipeById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});


export default recipesIdSlice.reducer;
