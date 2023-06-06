import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const AddProductModalSlice = createSlice({
  name: 'addProductModalOpened',
  initialState,
  reducers: {
    setProductModalOpened(_, action) {
      return action.payload;
    },
  },
});

export const { setProductModalOpened } = AddProductModalSlice.actions;
export const addProductModalReducer = AddProductModalSlice.reducer;
