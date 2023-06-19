const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
    name: 'theme',
    state: 'light',
    reducers: {
        changeTheme: (state, action) => {
            state = action.payload;
        }
    }
}) 
export const themeReducer = themeSlice.reducer;

export const {changeTheme} = themeSlice.actions;
