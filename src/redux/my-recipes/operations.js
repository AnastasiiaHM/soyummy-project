import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

export const fetchOwnRecipes = createAsyncThunk(
  'ownRecipes/fetchOwnRecipes',
  async (page, thunkApi) => {
    try {
      const zeroPage = page === 0 ? '1' : page;
      const limit = thunkApi.getState().ownRecipes.itemsPerPage;
      const {
        data: { ownRecipes, total },
      } = await axios.get(
        `/recipes/own-recipes?page=${zeroPage}&limit=${limit}`
      );

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
      await axios.delete(`/recipes/${recipeId}`);

      return recipeId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
