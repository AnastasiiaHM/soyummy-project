import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/getShopping_list',
  async (_, thunkAPI) => {
    try {
      setAuthHeader(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODk4ZjFmMTJjYzM0NzA2ZTgzZTI3NCIsImlhdCI6MTY4NjczNjY3MSwiZXhwIjoxNjg5NjE2NjcxfQ.XH9qTKael0U6BfD2m04Hsl-CdibmmXzUtbvoD1js7Bw'
      );
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
      setAuthHeader(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODk4ZjFmMTJjYzM0NzA2ZTgzZTI3NCIsImlhdCI6MTY4NjczNjY3MSwiZXhwIjoxNjg5NjE2NjcxfQ.XH9qTKael0U6BfD2m04Hsl-CdibmmXzUtbvoD1js7Bw'
      );
      const response = await axios.patch(`users/shopping-list/remove`, {
        ingredientId,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
