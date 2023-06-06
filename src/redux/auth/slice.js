import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,

  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder;
    //   .addCase(register.fulfilled, registerFulfilledReducer)
  },
});
export const authReducer = authSlice.reducer;
