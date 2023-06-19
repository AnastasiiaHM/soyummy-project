import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { instance } from 'redux/auth/operations';

export const fetchRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (recipeId, thunkAPI) => {
    try {
      const response = await instance.get(`/recipes/${recipeId}`);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
