// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleLocationMasterList } from "../../../Api/api";

// Define an initial state for the slice
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Create an async thunk for the login action
export const locationMasterListAsync = createAsyncThunk(
  "locationMaster/add",
  async (data) => {
    try {
      console.log(data);
      const response = await handleLocationMasterList(data);
      console.log({ response });
      return response.data;
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      throw error.response.data;
    }
  }
);

// Create a slice of the Redux store
const locationMasterListSlice = createSlice({
  name: "locationMaster",
  initialState,
  reducers: {
    // You can define additional synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(locationMasterListAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(locationMasterListAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log(action.payload);
      })
      .addCase(locationMasterListAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // error message from the rejectWithValue call
      });
  },
});

// Export the reducer
export default locationMasterListSlice.reducer;
