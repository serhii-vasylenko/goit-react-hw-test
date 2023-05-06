import { createSlice } from '@reduxjs/toolkit';

import { addFollow, fetchUsers, removeFollow } from 'redux/operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, handlePending);
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.items.push(...action.payload);
      resetState(state);
    });
    builder.addCase(fetchUsers.rejected, handleRejected);
    builder.addCase(addFollow.pending, handlePending);
    builder.addCase(addFollow.fulfilled, (state, action) => {
      resetState(state);
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            followers: item.followers + 1,
          };
        }
        return item;
      });
    });
    builder.addCase(addFollow.rejected, handleRejected);
    builder.addCase(removeFollow.pending, handlePending);
    builder.addCase(removeFollow.fulfilled, (state, action) => {
      resetState(state);
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            followers: item.followers - 1,
          };
        }
        return item;
      });
    });
    builder.addCase(removeFollow.rejected, handleRejected);
  },
});

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const resetState = state => {
  state.isLoading = false;
  state.error = null;
};

export default usersSlice.reducer;
