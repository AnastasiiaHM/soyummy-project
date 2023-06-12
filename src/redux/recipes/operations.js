import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const fetchRecipesByCategory = createAsyncThunk(
    '/categories',
    async (_, thunkAPI) => {
        try {
            setAuthHeader(thunkAPI.getState().auth.token);
            const response = await axios.get('/recipes/category/:category');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
