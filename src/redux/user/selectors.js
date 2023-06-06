export const selectUserName = state => state.user.name;

export const selectUserPhotoUrl = state => state.user.avatarURL;

export const selectIsLoading = state => state.user.isLoading;

export const selectError = state => state.user.error;
