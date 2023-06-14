import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjU5MzkwOSwiZXhwIjoxNjg5NDczOTA5fQ.byGm48HrksIWr711DkfmguTLmtF0x7hq2sIXyThw8ts`;
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

export const fetchAllRecipes = createAsyncThunk(
    'categories/fetchAllRecipes',
    async (page, thunkApi) => {
        try {
            setAuthHeader(thunkApi.getState().auth.token);
            const response = await axios.get(`/recipes?page=${page}&limit=8`);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const fetchRecipesByCategory = createAsyncThunk(
    'categories/fetchRecipesByCategory',
    async (category, thunkApi) => {
        try {
            setAuthHeader(thunkApi.getState().auth.token);
            const page = thunkApi.getState().categories.currentPage
            const limit = thunkApi.getState().categories.itemsPerPage;
            const response = await axios.get(`/recipes/category/${category}?page=${page}&limit=${limit}`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const fetchMainPageRecipes = createAsyncThunk(
    'categories/fetchMainPageRecipes',
    async (_, thunkApi) => {
        try {
            setAuthHeader(thunkApi.getState().auth.token);
            const response = await axios.get('/recipes/main-page');
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);