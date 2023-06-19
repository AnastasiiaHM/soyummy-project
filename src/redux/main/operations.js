import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/operations';

export const fetchMainPageRecipes = createAsyncThunk(
  'main/fetchMainPageRecipes',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/recipes/main-page');
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
