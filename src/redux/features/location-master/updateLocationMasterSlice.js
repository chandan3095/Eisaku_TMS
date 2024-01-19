// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleLocationMasterUpdate } from "../../../Api/api";

// Define an initial state for the slice
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Create an async thunk for the login action
export const locationMasterUpdateAsync = createAsyncThunk(
  "locationMaster/update",
  async (data) => {
    console.log(data);
    try {
      // const { id, modelId, actionId } = data;
      const response = await handleLocationMasterUpdate(
       data
      );
      return response.data;
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      throw error.response.data;
    }
  }
);

// Create a slice of the Redux store
const locationMasterSingleListSlice = createSlice({
  name: "locationMaster",
  initialState,
  reducers: {
    // You can define additional synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(locationMasterUpdateAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(locationMasterUpdateAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        // console.log(action.payload);
      })
      .addCase(locationMasterUpdateAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // error message from the rejectWithValue call
      });
  },
});

// Export the reducer
export default locationMasterSingleListSlice.reducer;
