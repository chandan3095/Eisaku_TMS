// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleAddLocationMaster } from "../../../Api/api";

// Define an initial state for the slice
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Create an async thunk for the login action
export const addLocationMasterAsync = createAsyncThunk(
  "locationMaster/add",
  async (data) => {
    try {
      console.log(data);
      const response = await handleAddLocationMaster(data);
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
const locationMasterSlice = createSlice({
  name: "locationMaster",
  initialState,
  reducers: {
    // You can define additional synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(addLocationMasterAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addLocationMasterAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload);
      })
      .addCase(addLocationMasterAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // error message from the rejectWithValue call
      });
  },
});

// Export the reducer
export default locationMasterSlice.reducer;
