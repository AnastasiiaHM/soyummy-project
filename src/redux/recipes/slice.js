import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipesByCategory, fetchCategory } from './operations'

const initialState = {
    recipes: [],
    category: [],
    totalPages: 0,
    currentPage: 1,
    itemsPerPage: 8,
    loading: false,
    error: null,
    filter: ''
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategory.fulfilled, (state, { payload }) => {
                state.category = payload;
                state.loading = false;
            })
            .addCase(fetchCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategory.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            .addCase(fetchRecipesByCategory.fulfilled, (state, { payload }) => {
                state.recipes = payload.response;
                state.totalPages = Math.ceil(payload.totalRecipes / 8);
                state.currentPage = payload.currentPage;
                state.loading = false;
            })
            .addCase(fetchRecipesByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipesByCategory.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
    },
});

export const { setFilter } = categoriesSlice.actions;
export default categoriesSlice.reducer;