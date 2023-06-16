import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

export const fetchMainPageRecipes = createAsyncThunk(
  'main/fetchMainPageRecipes',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/recipes/main-page');
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
