import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

//

export const fetchRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${recipeId}`);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
