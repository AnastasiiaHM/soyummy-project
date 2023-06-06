export const selectAll = state => state.user;
export const selectUser = state => state.user.user;
export const selectError = state => state.user.error;
export const selectAuthError = state => state.user.authError;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectIsRefreshing = state => state.user.isRefreshing;
export const selectFullfilledCalculator = state =>
  state.user.fullfilledCalculator;
export const selectSelectedDate = state => state.user.selectedDate;
export const selectIsLoading = state => state.user.isLoading;
export const selectProducts = state => state.user.products;
export const selectIsLoadingProducts = state => state.user.isLoadingProducts;
export const selectDayId = state => state.user.dayInfo._id;
export const selectDiaryError = state => state.user.diaryError;
export const selectIsProductDeleting = state => state.user.isProductDeleting;
export const selectIsLoadingAddProduct = state =>
  state.user.isLoadingAddProduct;
