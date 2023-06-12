import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchSearchRecipes = createAsyncThunk(
  'recipes/title',
  async (query, thunkAPI) => {
    try {
      setAuthHeader(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjU1Nzk1OSwiZXhwIjoxNjg2NjQwNzU5fQ.P-to9_i_8RmcJ45i1iW-szymiJqfWW61hMnOV2hC2tM'
      );
      const response = await axios.get(`/recipes/${query}`);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSearchIngridients = createAsyncThunk(
  'recipes/ingridients',
  async (value, thunkAPI) => {
    try {
      const response = await axios.get(`/ingredients/${value}`);
      return response.data;
    } catch (error) {
      toast.error('Error fetching ingredient:');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
