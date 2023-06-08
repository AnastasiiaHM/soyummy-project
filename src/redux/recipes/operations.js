import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com/api-docs/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = null;
// };


export const fetchCategories = createAsyncThunk(
    'categories/getCategory',
    async (_, thunkAPI) => {
        try {
            setAuthHeader(thunkAPI.getState().auth.token);
            const response = await axios.get('/categories');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
