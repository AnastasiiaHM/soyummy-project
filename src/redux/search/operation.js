import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getRecipesByQuery = createAsyncThunk(
  'search/getRecipesByQuery',
  async (query, thunkAPI) => {
    try {
      setAuthHeader(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjU5MzkwOSwiZXhwIjoxNjg5NDczOTA5fQ.byGm48HrksIWr711DkfmguTLmtF0x7hq2sIXyThw8ts'
      );
      const response = await axios.get(
        `/recipes/title/title=${query}?page=${page}&limit=${LIMIT}`
      );
      //localhost:3000/recipes/ingredient?ingredient=e&page=1&limit=2;
      http: return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipesByIngredient = createAsyncThunk(
  'search/getRecipesByIngredient',
  async (type, thunkAPI) => {
    try {
      setAuthHeader(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjU5MzkwOSwiZXhwIjoxNjg5NDczOTA5fQ.byGm48HrksIWr711DkfmguTLmtF0x7hq2sIXyThw8ts'
      );
      const response = await axios.get(
        `/recipes/ingredient?ingredient=${type}&page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      toast.error('Error fetching ingredient:');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
