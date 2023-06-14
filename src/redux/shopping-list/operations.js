import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  }
};

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/getShopping_list',
  async (_, thunkAPI) => {
    try {
      setAuthHeader();
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
      setAuthHeader();
      const response = await axios.patch(`users/shopping-list/remove`, {
        ingredientId,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
