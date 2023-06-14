import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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

export const getRecipesByQuery = createAsyncThunk(
  'search/getRecipesByQuery',
  async (query, thunkAPI) => {
    try {
      setAuthHeader();
      const response = await axios.get(
        `recipes/title?title=${query}&page=1&limit=8`
      );
      return response.data.recipes;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipesByIngredient = createAsyncThunk(
  'search/getRecipesByIngredient',
  async (type, thunkAPI) => {
    try {
      setAuthHeader();
      const response = await axios.get(
        `recipes/ingredient?ingredient=${type}&page=1&limit=8`
      );

      return response.data.recipes;
    } catch (error) {
      toast.error('Error fetching ingredient:');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
