import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
  // if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  // } else {
  //   const storedToken = localStorage.getItem('token');
  //   if (storedToken) {
  //     axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
  //   } else {
  //     delete axios.defaults.headers.common.Authorization;
  //   }
  // }
};

export const register = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      const resLogin = await axios.post('/users/register', credentials);
      setAuthHeader(resLogin.data.token);

      return resLogin.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const LogIn = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    if (state.auth.token === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(state.auth.token);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
