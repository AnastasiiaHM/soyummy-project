import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/getShopping_list',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('users/shopping-list');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setDeleteProduct = createAsyncThunk(
  'shoppingList/setDeleteProduct',
  async (ingredientId, thunkAPI) => {
    try {
      const response = await axios.patch(`users/shopping-list/remove`, {
        ingredientId,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
