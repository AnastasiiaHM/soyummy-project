const { createSlice } = require('@reduxjs/toolkit');

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    changeTheme: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const themeReducer = themeSlice.reducer;

export const { changeTheme } = themeSlice.actions;
