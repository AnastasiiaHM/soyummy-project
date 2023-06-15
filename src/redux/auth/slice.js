import { createSlice } from '@reduxjs/toolkit';
import { register, LogIn, logout } from './operations';

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
      .addCase(logout.pending, state => {});
  },
});

export const { setLoading } = userSlice.actions;
export const authReducer = userSlice.reducer;
