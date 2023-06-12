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
            setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjUwNDU5NCwiZXhwIjoxNjg2NTg3Mzk0fQ.bq7-VDVpUp5qpOcwjr8k7PlgSK0jmeshayZXXgFMJ2Q');
            const response = await axios.get(`/recipes/${recipeId}`);
            return response.data;
        } catch (error) {
            toast.error('Something went wrong, please try again later');
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);