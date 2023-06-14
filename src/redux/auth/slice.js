import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn } from './operations';
import { register, LogIn } from './operations';

const initialState = {
  message: null,
  token: null,
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
  loading: false,
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
        state.error = null;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.authError = action.payload;
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(register.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(LogIn.fulfilled, (state, action) => {
        state.user = action.user;
        state.token = action.token;
        state.isLoggedIn = true;
        state.authError = null;
        state.error = null;
        state.loading = false;
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.authError = action.payload;
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(LogIn.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      });
  },
});

export const { setLoading } = userSlice.actions;
export const authReducer = userSlice.reducer;
