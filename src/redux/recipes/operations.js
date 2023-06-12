import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchCategory = createAsyncThunk(
    'categories/fetchAll',
    async (_, thunkApi) => {
        try {
            setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjU1Nzk1OSwiZXhwIjoxNjg2NjQwNzU5fQ.P-to9_i_8RmcJ45i1iW-szymiJqfWW61hMnOV2hC2tM');
            const response = await axios.get('/categories');
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const fetchRecipesByCategory = createAsyncThunk(
    'categories/fetchRecipesByCategory',
    async ({ category, page, limit }, thunkApi) => {
        try {
            setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjU1Nzk1OSwiZXhwIjoxNjg2NjQwNzU5fQ.P-to9_i_8RmcJ45i1iW-szymiJqfWW61hMnOV2hC2tM');
            const {
                data: { recipes, total },
            } = await axios.get(`/recipes/category/${category}?page=${page}&limit=${limit}`);

            return {
                recipes: recipes,
                totalPages: total / limit,
                currentPage: page,
            };
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);