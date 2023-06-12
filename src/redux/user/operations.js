// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const register = createAsyncThunk(
//   'users/register',
//   async (credentials, thunkAPI) => {
//     try {
//       await axios.post('/users/register', credentials);
//       const { email, password } = credentials;
//       const resLogin = await axios.post('/users/login', { email, password });
//       setAuthHeader(resLogin.data.accessToken);

//       return resLogin.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   }
// );

// export const LogIn = createAsyncThunk(
//   '/users/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/login', credentials);
//       setAuthHeader(res.data.accessToken);

//       const userResponse = await axios.get('/users');
//       return { user: userResponse.data, accessToken: res.data.accessToken };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   }
// );
