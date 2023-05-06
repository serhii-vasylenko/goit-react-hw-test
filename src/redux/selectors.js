// import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users.items;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;