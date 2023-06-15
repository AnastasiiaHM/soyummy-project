import { createSlice } from '@reduxjs/toolkit';
import { register, LogIn, logout, refreshUser } from './operations';

const initialState = {
  message: null,
  token: localStorage.getItem('token') || null,
  user: {
    name: null,
    email: null,
    password: null,
    _id: null,
    avatarURL: null,
    shoppingList: [],
  },
  isLoggedIn: false,
  authError: null,
  error: null,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { name, email, _id } = action.payload.user;
        state.user._id = _id;
        state.user.name = name;
        state.user.email = email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authError = null;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(register.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(LogIn.fulfilled, (state, action) => {
        const { name, email, _id, avatarURL } = action.payload.user;
        state.user._id = _id;
        state.user.name = name;
        state.user.email = email;
        state.token = action.payload.token;
        state.user.avatarURL = avatarURL;
        state.isLoggedIn = true;
        state.authError = null;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(LogIn.pending, (state, action) => {})
      .addCase(logout.fulfilled, state => {
        state.token = null;
        state.isLoggedIn = false;
        state.user = {
          name: null,
          email: null,
          password: null,
          _id: null,
          avatarURL: null,
          shoppingList: [],
        };
        state.authError = null;
        localStorage.removeItem('token');
      })
      .addCase(logout.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(logout.pending, state => {})
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export const { setLoading } = userSlice.actions;
export const authReducer = userSlice.reducer;
