import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  calculatorAnonim,
  calculatorLogIn,
  addProduct,
  diaryDayInfo,
  deleteProduct,
  fetchProductsList,
} from './operations';

const today = new Date();
const formattedDate = today.toISOString().slice(0, 10);

const initialState = {
  user: {
    email: null,
    username: null,
    id: null,
    userData: {
      weight: 0,
      height: 0,
      age: 0,
      bloodType: null,
      desiredWeight: 0,
      dailyRate: 0,
      notAllowedProducts: [],
    },
    days: [],
  },
  error: null,
  token: null,
  isRefreshing: true,
  isLoggedIn: false,
  authError: null,
  fullfilledCalculator: false,
  selectedDate: formattedDate,
  products: [],
  isLoadingProducts: false,
  dayInfo: {},
  isLoadingEatenProducts: false,
  diaryError: null,
  isProductDeleting: false,
  isLoadingAddProduct: false,

  // error: null,
  // isLoggedIn: false,

  // CALCULATOR
  // id: null,
  // dailyRate: null,
  // notAllowedProducts: [],
  // summaries: [],
  // isLoading: false,
  // error: null,
  // fullfilled: false,

  // DIARY
  // dayInfo: {},
  // selectedDate: null,
  // isLoading: false,
  // isDeleting: false,
  // error: null,

  // DROPDOWN
  // products: [],
  // isLoading: false,
  // error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { username, email, id } = action.payload.user;
        state.user.id = id;
        state.user.username = username;
        state.user.email = email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.authError = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.authError = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { username: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      // calculator
      .addCase(calculatorAnonim.fulfilled, (state, action) => {
        state.user.userData.dailyRate = action.payload.dailyRate;
        state.user.userData.notAllowedProducts =
          action.payload.notAllowedProducts;
        state.fullfilledCalculator = true;
      })
      .addCase(calculatorAnonim.pending, state => {
        state.fullfilledCalculator = false;
      })
      .addCase(calculatorAnonim.rejected, (state, action) => {
        state.error = action.payload;
        state.fullfilledCalculator = false;
      })
      .addCase(calculatorLogIn.fulfilled, (state, action) => {
        const { response, data } = action.payload;

        state.user.userData.weight = data.weight;
        state.user.userData.height = data.height;
        state.user.userData.age = data.age;
        state.user.userData.bloodType = data.bloodType;
        state.user.userData.desiredWeight = data.desiredWeight;
        state.user.userData.dailyRate = response.dailyRate;

        state.user.userData.notAllowedProducts = response.notAllowedProducts;

        state.fullfilledCalculator = true;
      })
      .addCase(calculatorLogIn.pending, state => {
        state.fullfilledCalculator = false;
      })
      .addCase(calculatorLogIn.rejected, (state, action) => {
        state.error = action.payload;
        state.fullfilledCalculator = false;
      })
      // diary
      .addCase(addProduct.fulfilled, (state, action) => {
        const dayIndex = state.user.days.findIndex(
          day => day.date === state.selectedDate
        );

        let day;
        let daySummary;

        day = action.payload.newDay ?? action.payload.day;
        daySummary = action.payload.newSummary ?? action.payload.daySummary;

        const newDay = {};
        newDay._id = day.id;
        newDay.date = day.date;
        newDay.eatenProducts = day.eatenProducts;
        newDay.daySummary = daySummary;

        if (dayIndex === -1) {
          state.user.days.push(newDay);
        } else {
          state.user.days[dayIndex] = newDay;
        }

        // const dayIndex = state.user.days.findIndex(
        //   day => day.date === state.selectedDate
        // );
        // console.log(state.user);
        // const DaysCopy = state.user.days.reduce((acc, day) => {
        //   acc.push(day);
        // }, []);
        // console.log(DaysCopy);

        // const dayFiltered = state.user.days.filter(
        //   (day, index) => day.date === state.selectedDate
        // );

        // console.log(dayFiltered);
        // state.user.days[dayIndex]

        // state.user.days = state.user.days.map(contact => contact.id === action.payload.id ? action.payload : contact);

        // console.log('index: ', state.user.days[dayIndex]);
        // console.log('newDay: ', newDay);
        // state.user.days.push(newDay);

        state.isLoadingAddProduct = false;
      })
      .addCase(addProduct.pending, state => {
        state.diaryError = null;
        state.isLoadingAddProduct = true;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.diaryError = action.payload;
        state.isLoadingAddProduct = false;
      })
      .addCase(diaryDayInfo.fulfilled, (state, action) => {
        state.dayInfo = action.payload;
        state.isLoadingEatenProducts = false;
      })
      .addCase(diaryDayInfo.pending, state => {
        state.diaryError = null;
        state.isLoadingEatenProducts = true;
      })
      .addCase(diaryDayInfo.rejected, (state, action) => {
        state.diaryError = action.payload;
        state.isLoadingEatenProducts = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const dayIndex = state.user.days.findIndex(
          day => day.date === state.selectedDate
        );

        state.user.days[dayIndex].eatenProducts = state.user.days[
          dayIndex
        ].eatenProducts.filter(
          product => product.id !== action.payload.productId
        );

        state.user.days[dayIndex].daySummary =
          action.payload.data.newDaySummary;

        state.isProductDeleting = false;
      })
      .addCase(deleteProduct.pending, state => {
        state.isProductDeleting = true;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isProductDeleting = false;
      })
      // dropdown
      .addCase(fetchProductsList.pending, (state, action) => {
        state.isLoadingProducts = true;
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.isLoadingProducts = false;
        // state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProductsList.rejected, (state, action) => {
        state.isLoadingProducts = false;
        // state.error = action.payload;
      });
  },
  reducers: {
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setUserData(state, action) {
      state.user.userData.height = action.payload.height;
      state.user.userData.age = action.payload.age;
      state.user.userData.weight = action.payload.weight;
      state.user.userData.desiredWeight = action.payload.desiredWeight;
      state.user.userData.bloodType = action.payload.bloodType;
    },
  },
});

export const { setSelectedDate, setUserData, deleteUserData } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
