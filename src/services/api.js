import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64248a3d9e0a30d92b1e46af.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'task/fetchAll',
  async (page, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        limit: 3,
        page,
      });
      const response = await axios.get(`/users/?${params}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
