import { createSlice } from '@reduxjs/toolkit';
import { register, LogIn, logout } from './operations';
import { updateUser } from 'redux/user/operations';

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
        localStorage.setItem('token', action.payload.accessToken);
      })
      .addCase(register.rejected, (state, action) => {
        state.authError = action.payload;
        state.isLoggedIn = false;
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
        localStorage.setItem('token', action.payload.accessToken);
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.authError = action.payload;
        state.isLoggedIn = false;
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
        state.isLoggedIn = true;
      })
      .addCase(logout.pending, state => {})
      .addCase(updateUser.fulfilled, (state, action) => {
        const { name, avatarURL } = action.payload;
        state.user.name = name;
        state.user.avatarURL = avatarURL;
        state.error = null;
      })
      .addCase(updateUser.pending, state => {})
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setLoading } = userSlice.actions;
export const authReducer = userSlice.reducer;
