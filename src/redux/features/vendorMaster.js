import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addVendorMasterApiCall,
  getAllLaneApiCall,
  handleLocationMasterList,
} from "../../Api/api";

// initial state
const initialState = {
  dataList: [],
  laneData: [],
  locationData: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const fetchAllLocationAsync = createAsyncThunk(
  "vendorMaster/fetchAllLocation",
  async (data, thunkAPI) => {
    try {
      const response = await handleLocationMasterList();
      if (response?.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response?.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

export const fetchAllLaneAsync = createAsyncThunk(
  "vendorMaster/fetchAllLane",
  async (data, thunkAPI) => {
    try {
      const response = await getAllLaneApiCall();
      if (response?.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response?.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

// Add vendor
export const addVendorMasterAsync = createAsyncThunk(
  "vendorMaster/addVendorMaster",
  async (data, thunkAPI) => {
    try {
      const response = await addVendorMasterApiCall(data);
      if (response?.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response?.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

const vendorMasterSlice = createSlice({
  name: "vendorMaster",
  initialState,

  reducers: {
    clearVendorMaster: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },

  extraReducers: (builder) => {
    //Location
    builder.addCase(fetchAllLocationAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllLocationAsync.fulfilled, (state, action) => {
      state.locationData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAllLocationAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
    // Lane
    builder.addCase(fetchAllLaneAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllLaneAsync.fulfilled, (state, action) => {
      state.laneData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAllLaneAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { clearVendorMaster } = vendorMasterSlice.actions;
const vendorMasterReducer = vendorMasterSlice.reducer;
export default vendorMasterReducer;
