import { createSlice } from "@reduxjs/toolkit";
import { fetchMainPageRecipes } from './operations'

const initialState = {
    recipes: [],
    totalPages: 0,
    currentPage: 1,
    itemsPerPage: 4,
    loading: false,
    error: null,
};

const mainPageSlice = createSlice({
    name: 'main',
    initialState,
    extraReducers: builder => {
        builder

            .addCase(fetchMainPageRecipes.fulfilled, (state, { payload }) => {
                state.recipes = payload;
                state.currentPage = payload.currentPage;
                state.totalPages = payload.totalPages;
                state.loading = false;
            })
            .addCase(fetchMainPageRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMainPageRecipes.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
    },
});

export default mainPageSlice.reducer;