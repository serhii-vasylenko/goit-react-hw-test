import { createSlice } from '@reduxjs/toolkit';

import { addFollow, fetchUsers, removeFollow } from 'redux/operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
  },
  reducers: {
    nextPage(state) {
      state.page = state.page + 1;
    },
    clearState(state) {
      state.page = 1;
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, handlePending);
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      console.log(state.items.length)
      state.items =  [...state.items, ...action.payload];
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
export const { nextPage, clearState } = usersSlice.actions;
