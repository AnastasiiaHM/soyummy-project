import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const fetchFavoriteRecipes = createAsyncThunk(
  'favoriteRecipes/fetchFavoriteRecipes',
  async (page, thunkApi) => {
    try {
      setAuthHeader();
      const limit = thunkApi.getState().favoriteRecipes.itemsPerPage;
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
      setAuthHeader();
      await axios.post(`/recipes/favorite/remove`, {
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
      setAuthHeader();
      await axios.post('/recipes/favorite/add', {
        _id: recipeId,
      });

      return recipeId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);