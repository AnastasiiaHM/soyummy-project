import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/auth/register', credentials);
      const { email, password } = credentials;
      const resLogin = await axios.post('/auth/login', { email, password });
      setAuthHeader(resLogin.data.accessToken);

      return resLogin.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.accessToken);

      const userResponse = await axios.get('/user');
      return { user: userResponse.data, accessToken: res.data.accessToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    if (state.auth.token === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(state.auth.token);
      const res = await axios.get('/user');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshToken = createAsyncThunk(
  'user/refreshToken',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/refreshToken', credentials);
      setAuthHeader(res.data.result.accessToken);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// calculator

export const calculatorAnonim = createAsyncThunk(
  'user/calculatorAnonim',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/daily-rate', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const calculatorLogIn = createAsyncThunk(
  'user/calculatorLogIn',
  async ([id, data], thunkAPI) => {
    try {
      const res = await axios.post(`/daily-rate/${id}`, { ...data });

      return { response: res.data, data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// diary

export const diaryDayInfo = createAsyncThunk(
  'user/dayInfo',
  async (date, thunkApi) => {
    try {
      const response = await axios.post('/day/info', { date });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'user/deleteProduct',
  async ([eatenProductId, dayId], thunkApi) => {
    try {
      const response = await axios.delete('/day', {
        data: { eatenProductId, dayId },
      });

      return { data: response.data, productId: eatenProductId };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'user/addProduct',
  async (body, thunkApi) => {
    try {
      const response = await axios.post('day', body);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// dropdown

export const fetchProductsList = createAsyncThunk(
  'user/productsList',
  async (search, thunkAPI) => {
    if (!search) {
      throw new Error('Search parameter is required');
    }
    try {
      const response = await axios.get('/product', {
        params: { search },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
