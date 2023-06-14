import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './operations';

const initialState = {
    user: {
      newName: '', // початкове значення імені користувача
      avatar: '' // початкове значення аватарки користувача
    },
    error: null // початкове значення для поля помилки (якщо потрібно)
  };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // інші редюсери
  },
  extraReducers: builder => {
    builder
      // інші редюсери
      .addCase(updateUser.fulfilled, (state, action) => {
        const { _id, avatarURL, name } = action.payload;
        state.user._id = _id;
        state.user.avatar = avatarURL;
        state.user.newName = name;
      })
      .addCase(updateUser.rejected, (state, action) => {
        // обробка помилки при оновленні користувача
        state.error = action.payload;
      });
  },
});

export const authReducer = userSlice.reducer;