import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODk4ZjFmMTJjYzM0NzA2ZTgzZTI3NCIsImlhdCI6MTY4NjczNjY3MSwiZXhwIjoxNjg5NjE2NjcxfQ.XH9qTKael0U6BfD2m04Hsl-CdibmmXzUtbvoD1js7Bw`;
};

export const fetchFavoriteRecipes = createAsyncThunk(
  'favoriteRecipes/fetchFavoriteRecipes',
  async (page, thunkApi) => {
    try {
      setAuthHeader(thunkApi.getState().auth.token);

      const limit = thunkApi.getState().favoriteRecipes.itemsPerPage;
      console.log(limit);
      const {
        data: { favoriteRecipes, total },
      } = await axios.get(`/recipes/favorite?page=${page}&limit=${limit}`);

      return {
        recipes: favoriteRecipes,
        totalRecipes: total,
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
