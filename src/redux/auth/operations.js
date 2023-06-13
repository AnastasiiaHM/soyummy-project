import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      //   const { email, password, name } = credentials;
      const resLogin = await axios.post('/users/register', credentials);

      //   const resLogin = await axios.post('/users/register', {
      //     email,
      //     password,
      //     name,
      //   });

      setAuthHeader(resLogin.data.accessToken);
      console.log(resLogin.data);
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
      setAuthHeader(res.data.accessToken);

      //const userResponse = await axios.get('/users/current');
        //return { user: userResponse.data, accessToken: res.data.accessToken };
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