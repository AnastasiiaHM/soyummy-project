import { createSlice } from '@reduxjs/toolkit';
import { fetchShoppingList, setDeleteProduct } from './operations';

const initialState = {
  shoppingList: [],
  deletedProductId: null,
  isLoading: false,
  error: null,
};

const shoppingList = createSlice({
  name: 'shoppingList',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload;
        state.deletedProductId = [];
        state.isLoading = false;
      })
      .addCase(fetchShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(setDeleteProduct.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setDeleteProduct.fulfilled, (state, { payload } ) => {
        state.shoppingList = state.shoppingList.filter(
          product => product.ingredientId !== payload.ingredientId 
        );
        console.log(state.shoppingList);
        state.deletedProductId = payload.ingredientId;
        state.isLoading = false;
      })
      .addCase(setDeleteProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default shoppingList.reducer;
