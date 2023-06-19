import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/operations';

export const fetchFavoriteRecipes = createAsyncThunk(
  'favoriteRecipes/fetchFavoriteRecipes',
  async (page = 1, thunkApi) => {
    try {
      const zeroPage = page === 0 ? '1' : page;
      const limit = thunkApi.getState().favoriteRecipes.itemsPerPage;
      const {
        data: { favoriteRecipes, total },
      } = await instance.get(`/recipes/favorite?page=${zeroPage}&limit=${limit}`);

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
      await instance.post(`/recipes/favorite/remove`, {
        _id: recipeId,
      });

      return recipeId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const addFavoriteRecipe = createAsyncThunk(
  'favoriteRecipes/addFavoriteRecipe',
  async (recipeId, thunkApi) => {
    try {
      await instance.post('/recipes/favorite/add', {
        _id: recipeId,
      });

      return recipeId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
