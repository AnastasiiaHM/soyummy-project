import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/operations';

export const fetchCategory = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/categories');
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipesByCategory = createAsyncThunk(
  'categories/fetchRecipesByCategory',
  async ({ query, page }, thunkApi) => {
    try {
      const {
        data: { response, total },
      } = await instance.get(`/recipes/category/${query}?page=${page}&limit=8`);

      return {
        response,
        currentPage: page,
        totalRecipes: total,
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
