// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/operations';

// axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/getShopping_list',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('users/shopping-list');

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
      const response = await instance.patch(`users/shopping-list/remove`, {
        ingredientId,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
