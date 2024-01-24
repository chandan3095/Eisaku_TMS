// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleContractorMasterListApiCall } from "../../../Api/api";

// Define an initial state for the slice
const initialState = {
   user: null,
   loading: false,
   error: null,
};

// Create an async thunk for the login action
export const listContractorMasterAsync = createAsyncThunk(
   "auth/contractor/contractor-list",
   async (data) => {
      try {
         console.log(data);
         const response = await handleContractorMasterListApiCall(data);
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
const contractorMasterListSlice = createSlice({
   name: "contractormasterlist",
   initialState,
   reducers: {
      // You can define additional synchronous actions here if needed
   },
   extraReducers: (builder) => {
      builder
         .addCase(listContractorMasterAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(listContractorMasterAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            console.log(action.payload);
         })
         .addCase(listContractorMasterAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; // error message from the rejectWithValue call
         });
   },
});


// Export the reducer
export default contractorMasterListSlice.reducer;
