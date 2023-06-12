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
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjU1Nzk1OSwiZXhwIjoxNjg2NjQwNzU5fQ.P-to9_i_8RmcJ45i1iW-szymiJqfWW61hMnOV2hC2tM'
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
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjU1Nzk1OSwiZXhwIjoxNjg2NjQwNzU5fQ.P-to9_i_8RmcJ45i1iW-szymiJqfWW61hMnOV2hC2tM'
      );
      const response = await axios.patch(`users/shopping-list/remove`, {
        ingredientId,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
