import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addHelperMasterApiCall,
  fetchSingleHelperMasterApiCall,
  listHelperMasterApiCall,
  updateDriverMasterApiCall,
  updateHelperMasterApiCall,
} from "../../Api/api";
import { fetchAllContractorsAsync } from "./driverMaster";

// initial state
const initialState = {
  dataList: [],
  singleHelperMaster: null,

  contractors: [],

  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const addHelperMasterAsync = createAsyncThunk(
  "helperMaster/addHelpermaster",
  async (data, thunkAPI) => {
    try {
      const response = await addHelperMasterApiCall(data);
      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
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

export const listHelperMasterAsync = createAsyncThunk(
  "helpermaster/listHelpermaster",
  async (data, thunkAPI) => {
    try {
      const response = await listHelperMasterApiCall();
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

export const fetchSingleHelperMasterAsync = createAsyncThunk(
  "helpermaster/fetch-single-helpermaster",
  async (id, thunkAPI) => {
    try {
      const response = await fetchSingleHelperMasterApiCall(id);

      if (response?.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response?.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      //   console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

export const updateHelperMasterAsync = createAsyncThunk(
  "helpermaster/update-helpermaster",
  async (data, thunkAPI) => {
    try {
      const response = await updateHelperMasterApiCall(data);
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

const helperMasterSlice = createSlice({
  name: "helperMaster",
  initialState: initialState,

  reducers: {
    clearHelperMaster: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllContractorsAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllContractorsAsync.fulfilled, (state, action) => {
      //   console.log({ ful: action.payload });
      state.isLoading = false;
      state.contractors = action.payload;
    });
    builder.addCase(fetchAllContractorsAsync.rejected, (state, action) => {
      state.isLoading = false;
    });

    // List helper master
    builder.addCase(listHelperMasterAsync.pending, (state, acton) => {
      state.isLoading = true;
    });
    builder.addCase(listHelperMasterAsync.fulfilled, (state, action) => {
      state.dataList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(listHelperMasterAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    // Single helper master
    builder.addCase(fetchSingleHelperMasterAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleHelperMasterAsync.fulfilled, (state, action) => {
      state.singleHelperMaster = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSingleHelperMasterAsync.rejected, (state, acton) => {
      state.isError = acton.payload;
      state.isLoading = false;
    });
  },
});

export const { clearHelperMaster } = helperMasterSlice.actions;
const helperMasterReducer = helperMasterSlice.reducer;
export default helperMasterReducer;
