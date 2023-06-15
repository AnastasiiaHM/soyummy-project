import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './operations';

const initialState = {
  user: {
    newName: '', // початкове значення імені користувача
    avatar: '', // початкове значення аватарки користувача
  },
  error: null, // початкове значення для поля помилки (якщо потрібно)
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    updateUserProfileSuccess: (state, action) => {
      state.user.newName = action.payload.newName;
      state.user.name = action.payload.name;
      state.user.avatar = action.payload.avatarURL;
      state.error = null;
    },
    updateUserProfileFailure: (state, action) => {
      state.error = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(updateUser.fulfilled, (state, action) => {
        const { _id, avatarURL, name } = action.payload;
        state.user._id = _id;
        state.user.avatar = avatarURL;
        state.user.newName = name;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { updateUserProfileSuccess, updateUserProfileFailure } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
