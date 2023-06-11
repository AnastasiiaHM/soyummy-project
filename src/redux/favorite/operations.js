import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODFhZTk0ZDliMjc0NmY3MTJjZDExZiIsImlhdCI6MTY4NjQ5MDM2NywiZXhwIjoxNjg2NTczMTY3fQ.iAPasxMwLlGkbmY61hknFeMCZrjc-jU_KqjKtHrGfR8`;
};

export const fetchFavoriteRecipes = createAsyncThunk(
  'favoriteRecipes/fetchFavoriteRecipes',
  async ({ page, limit }, thunkApi) => {
    try {
      setAuthHeader(thunkApi.getState().auth.token);
      const {
        data: { favoriteRecipes, total },
      } = await axios.get(`/recipes/favorite?page=${page}&limit=${limit}`);

      return {
        recipes: favoriteRecipes,
        totalPages: total / limit,
        currentPage: page,
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const deleteFavoriteRecipe = createAsyncThunk(
  'favoriteRecipes/deleteFavoriteRecipe',
  async (recipeId, thunkApi) => {
    try {
      setAuthHeader(thunkApi.getState().auth.token);

      await axios.post(`/recipes/favorite/remove`, {
        _id: recipeId,
      });

      return recipeId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
