// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { instance } from 'redux/auth/operations';

// axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

export const getRecipesByQuery = createAsyncThunk(
  'search/getRecipesByQuery',
  async (query, thunkAPI) => {
    try {
      const response = await instance.get(
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
      const response = await instance.get(
        `recipes/ingredient?ingredient=${type}&page=1&limit=8`
      );

      return response.data.recipes;
    } catch (error) {
      toast.error('Error fetching ingredient:');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
