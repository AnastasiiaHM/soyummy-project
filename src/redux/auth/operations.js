import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const instance = axios.create({
  baseURL: BASE_URL,
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const { data } = await instance.post('/users/refresh', {
          refreshToken,
        });
        setToken(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        const updatedConfig = { ...error.config };
        updatedConfig.headers.Authorization = `Bearer ${data.accessToken}`;
        return instance(updatedConfig);
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      const resRegister = await instance.post('/users/register', credentials);

      setToken(resRegister.data.accessToken);
      localStorage.setItem('refreshToken', resRegister.data.refreshToken);

      return resRegister.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const LogIn = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post('/users/login', credentials);

      localStorage.setItem('refreshToken', res.data.refreshToken);
      setToken(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    const response = await instance.post('/users/logout');
    setToken();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      console.log(token);
      setToken(token);
      const result = await instance.get('/users/current');
      // setToken(token);
      return result.data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
