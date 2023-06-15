import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = (token) => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
        } else {
            delete axios.defaults.headers.common.Authorization;
        }
    }
};


export const fetchMainPageRecipes = createAsyncThunk(
    'main/fetchMainPageRecipes',
    async (_, thunkApi) => {
        try {
            setAuthHeader();
            const response = await axios.get('/recipes/main-page');
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);