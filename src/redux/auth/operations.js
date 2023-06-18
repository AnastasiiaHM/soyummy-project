import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

export const instance = axios.create({
  baseURL: BASE_URL,
});



const setToken = (token) => {
  if(token) {
      return instance.defaults.headers.common.authorization = `Bearer ${token}`;
  }
  instance.defaults.headers.common.authorization = "";
}

instance.interceptors.response.use(response => response, async (error) => {
  if(error.response.status == 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      console.log(refreshToken);
      try {
          const {data} = await instance.post("/auth/refresh", {refreshToken})
          console.log(`refresh: ${refreshToken}`);
          setToken(data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          return instance(error.config);
      }
      catch(error) {
          return Promise.reject(error);
      }
  } 
  return Promise.reject(error);
})

// const setAuthHeader = token => {
//   // if (token) {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   // } else {
//   //   const storedToken = localStorage.getItem('token');
//   //   if (storedToken) {
//   //     axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
//   //   } else {
//   //     delete axios.defaults.headers.common.Authorization;
//   //   }
//   // }
// };

export const register = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      const resRegister = await instance.post('/users/register', credentials);
      console.log(resRegister.data.accessToken);
      console.log(resRegister.data.refreshToken);
      setToken(resRegister.data.accessToken);
      localStorage.setItem("refreshToken", resRegister.data.refreshToken);

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
      localStorage.setItem("refreshToken", res.data.refreshToken);
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

export const getCurrent = async(token) => {
  try {
      setToken(token);
      const {data} = await instance.get("/users/current");
      return data;
  } catch (error) {
      setToken();
      throw error;
  }
}

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    if (state.auth.accessToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(state.auth.accessToken);
      // setAuthHeader(state.auth.token);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
