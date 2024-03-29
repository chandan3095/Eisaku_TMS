// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleLoginApiCall } from "../../Api/api";

// Define an initial state for the slice
const initialState = {
   user: null,
   loading: false,
   error: null,
   token: null,
   isLoggedIn: false
};

// Create an async thunk for the login action
export const loginUserAsync = createAsyncThunk(
   "auth/login",
   async (data,thunkAPI) => {
      try {
         console.log(data);
         const response = await handleLoginApiCall(data);
         console.log({response});
         if(response.data.statusCode === 200){
             localStorage.setItem('token', JSON.stringify(response.data.token))
            return response.data;
         }else{
           return thunkAPI.rejectWithValue('Error')
            // throw 'Error'
         }
      } catch (error) {
         // You can customize the error handling here
         console.log(error);
         return thunkAPI.rejectWithValue(error.response.data)
         // throw error.response.data;
      }
   }
);

// Create a slice of the Redux store
const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      // You can define additional synchronous actions here if needed
   },
   extraReducers: (builder) => {
      builder
         .addCase(loginUserAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(loginUserAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.token = action.payload?.token
            if (action.payload?.token){
               state.isLoggedIn=true
            }else{
               state.isLoggedIn= false
            }
            console.log(action.payload);
         })
         .addCase(loginUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; // error message from the rejectWithValue call
         });
   },
});


// Export the reducer
export default authSlice.reducer;
