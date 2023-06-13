import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchRecipeById = createAsyncThunk(
    'recipes/getRecipeById',
    async (recipeId, thunkAPI) => {
        try {
            setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjU5MzkwOSwiZXhwIjoxNjg5NDczOTA5fQ.byGm48HrksIWr711DkfmguTLmtF0x7hq2sIXyThw8ts');
            const response = await axios.get(`/recipes/${recipeId}`);
            return response.data;
        } catch (error) {
            toast.error('Something went wrong, please try again later');
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
