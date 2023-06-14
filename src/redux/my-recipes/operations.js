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

export const fetchOwnRecipes = createAsyncThunk(
  'ownRecipes/fetchOwnRecipes',
  async (page, thunkApi) => {
    try {
      setAuthHeader();

      const limit = thunkApi.getState().ownRecipes.itemsPerPage;
      const {
        data: { ownRecipes, total },
      } = await axios.get(`/recipes/own-recipes?page=${page}&limit=${limit}`);

      return {
        recipes: ownRecipes,
        totalRecipes: total,
        currentPage: page,
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const deleteOwnRecipe = createAsyncThunk(
  'ownRecipes/deleteOwnRecipe',
  async (recipeId, thunkApi) => {
    try {
      setAuthHeader();
      await axios.delete(`/recipes/${recipeId}`);

      return recipeId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
