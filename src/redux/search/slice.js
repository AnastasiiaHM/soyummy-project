import { createSlice } from '@reduxjs/toolkit';
import { getRecipesByQuery, getRecipesByIngredient } from './operation';

const initialState = {
  items: null,
  query: '',
  queryType: 'title',
  isLoading: false,
  error: null,
  example: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getRecipesByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        action.payload.length === 0
          ? (state.example = true)
          : (state.example = false);
      })
      .addCase(getRecipesByIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        action.payload.length === 0
          ? (state.example = true)
          : (state.example = false);
      })
      .addCase(getRecipesByQuery.pending, state => {
        state.isLoading = true;
        state.items = [];
      })
      .addCase(getRecipesByIngredient.pending, state => {
        state.isLoading = true;
        state.items = [];
      })
      .addCase(getRecipesByQuery.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.items = [];
      })
      .addCase(getRecipesByIngredient.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.items = [];
      });
  },
  reducers: {
    changeQueryType(state, action) {
      state.queryType = action.payload;
    },
    changeQuery(state, action) {
      state.query = action.payload;
    },
    resetState(state, action) {
      state = initialState;
    },

    changeItems(state, action) {
      state.items = action.payload;
    },
    changeExample(state, action) {
      state.example = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { changeQueryType } = searchSlice.actions;
export const { changeQuery } = searchSlice.actions;
export const { resetState } = searchSlice.actions;
export const { changeItems } = searchSlice.actions;
export const { changeExample } = searchSlice.actions;
