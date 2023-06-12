// import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn } from './operations';

// const initialState = {
//   message: null,
//   token: null,
//   user: {
//     name: null,
//     email: null,
//     password: null,
//     _id: null,
//     avatarURL: null,
//     shoppingList: [],
//   },
//   isLoggedIn: false,
//   authError: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         const { name, email, _id } = action.payload.user;
//         state.user._id = _id;
//         state.user.name = name;
//         state.user.email = email;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         state.authError = null;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.authError = action.payload;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         state.authError = null;
//       })
//       .addCase(logIn.rejected, (state, action) => {
//         state.authError = action.payload;
//       });
//   },
// });

// export const userReducer = userSlice.reducer;
