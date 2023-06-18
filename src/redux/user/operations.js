import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/operations';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://soyummy-back.onrender.com';
  
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ newName, ...userData }, thunkAPI) => {
    try {
      const formData = new FormData();
      if (newName) {
        formData.append('newName', newName);
      }
      for (const key in userData) {
        if (userData.hasOwnProperty(key)) {
          formData.append(key, userData[key]);
        }
      }

      const res = await instance.patch('/users/update-user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
