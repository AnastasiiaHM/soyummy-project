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

export const fetchCategory = createAsyncThunk(
    'categories/fetchAll',
    async (_, thunkApi) => {
        try {
            setAuthHeader();
            const response = await axios.get('/categories');
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const fetchAllRecipes = createAsyncThunk(
    'categories/fetchAllRecipes',
    async (page, thunkApi) => {
        try {
            setAuthHeader();
            const response = await axios.get(`/recipes?page=${page}&limit=8`);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const fetchRecipesByCategory = createAsyncThunk(
    'categories/fetchRecipesByCategory',
    async ({ category, page }, thunkApi) => {
        try {
            setAuthHeader();
            const { data: { response, total } } = await axios.get(`/recipes/category/${category}`, { params: { page, limit: 8 } });

            return {
                response,
                currentPage: page,
                totalRecipes: total,
            };
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const fetchMainPageRecipes = createAsyncThunk(
    'categories/fetchMainPageRecipes',
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