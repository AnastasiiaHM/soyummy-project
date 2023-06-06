import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from 'redux/user/operations';
import { calculatorAnonim, calculatorLogIn } from 'redux/user/operations';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(register.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(logIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logIn.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(logIn.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(logOut.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(logOut.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(calculatorAnonim.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(calculatorAnonim.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(calculatorAnonim.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(calculatorLogIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(calculatorLogIn.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(calculatorLogIn.fulfilled, state => {
      state.isLoading = false;
    });
  },
});

export const loadingReducer = loadingSlice.reducer;
