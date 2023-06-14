import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODFhZTk0ZDliMjc0NmY3MTJjZDExZiIsImlhdCI6MTY4NjczMTU0NywiZXhwIjoxNjg5NjExNTQ3fQ.0bLKIR6WwFBWh8M08GTkwD_sA8RZ4CbGSV5dEanXMZk`;
};

export const fetchCategory = createAsyncThunk(
    'categories/fetchAll',
    async (_, thunkApi) => {
        try {
            setAuthHeader(thunkApi.getState().auth.token);
            const response = await axios.get('/categories');
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
            setAuthHeader(thunkApi.getState().auth.token);
            const limit = thunkApi.getState().categories.itemsPerPage;
            const { data: { response, total } } = await axios.get(`/recipes/category/${category}?page=${page}&limit=${limit}`);

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
    async (filter, thunkApi) => {
        try {
            setAuthHeader(thunkApi.getState().auth.token);
            const response = await axios.get(`/recipes/main-page?${filter}`);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);