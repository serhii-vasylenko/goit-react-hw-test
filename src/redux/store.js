import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from "@redux-devtools/extension";
import usersSlice from 'redux/usersSlice';

const enhancer = devToolsEnhancer();

const store = configureStore({
  reducer: { users: usersSlice },
}, enhancer);

export default store;