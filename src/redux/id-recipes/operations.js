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

export const fetchRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (recipeId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      setAuthHeader(token);

      const response = await axios.get(`/recipes/${recipeId}`);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
