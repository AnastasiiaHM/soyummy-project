import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipesByCategory } from './operations'

const initialState = {
    categoryId: 0,
    name: '',
    isLoading: false,
    error: null,
    filter: ''
};

const categoriesSlice = createSlice({

    name: 'categories',
    initialState,
    reducers: {
        setCategoryName(state, action) {
            state.name = action.payload
            console.log(state.acton.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipesByCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.categoryId = action.payload;
            })
            .addCase(fetchRecipesByCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

    }
});

export const { setCategoryName } = categoriesSlice.actions;
export default categoriesSlice.reducer;