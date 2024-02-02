import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addCustomerMasterApiCall,
  addDriverMasterApiCall,
  addFleetApiCall,
  addLaneMasterApiCall,
  fetchAllContractorsApiCall,
  getAllLaneApiCall,
  getAllVendorsApiCall,
  getDropdownDataApiCall,
  listCustomerMasterApiCall,
  listDriverMasterApiCall,
  listFleetApiCall,
  listLaneMasterApiCall,
  updateCustomerMasterApiCall,
  updateDriverMasterApiCall,
  updateFleetApiCall,
} from "../../Api/api";
import client from "../../Api/client";

// initial state
const initialState = {
  dataList: [],
  singleCustomerMaster: null,

  allLanes: [],
  allVendors: [],

  contractors: [],

  isLoading: false,
  isError: false,
  isSuccess: false,
};

// add fleet
export const fetchAllContractorsAsync = createAsyncThunk(
  "driverMaster/fetch-contractors-driver",
  async (_, thunkAPI) => {
    try {
      console.log();
      const response = await fetchAllContractorsApiCall();
      console.log({ response });

      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

// add fleet
export const addLaneMasterAsync = createAsyncThunk(
  "customerMaster/add-customer-master",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await addLaneMasterApiCall(data);
      console.log({ response });

      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

// update fleet
export const updateCustomerMasterAsync = createAsyncThunk(
  "driverMaster/update-customer-master",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await updateCustomerMasterApiCall(data);
      console.log({ response });

      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

// add fleet
export const listLaneMasterAsync = createAsyncThunk(
  "driverMaster/list-driver-master",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await listLaneMasterApiCall();
      console.log({ response });

      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

// add fleet
export const getAllLaneAsync = createAsyncThunk(
  "driverMaster/getAllLaneAsync",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await getAllLaneApiCall();
      console.log({ response });

      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

// add fleet
export const getAllVendorAsync = createAsyncThunk(
  "driverMaster/getAllVendorAsync",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await getAllVendorsApiCall();
      console.log({ response });

      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

// fetch single customer master
export const fetchSingleCustomerMasterAsync = createAsyncThunk(
  "driverMaster/fetch-single-customer master",
  async (id, thunkAPI) => {
    try {
      const response = await client.get(`customer/fetch/${id}?&model_id=6&action_id=3`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      console.log({ response });

      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

// fetch single fleet child data
export const updateSingleCustomerChildAsync = createAsyncThunk(
  "fleetmaster/update-single-customer-child",
  async (data, thunkAPI) => {
    try {
      const response = await client.post(`customer/update/child`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      console.log({ response });

      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

// fetch single fleet child data
export const addSingleCustomerChildAsync = createAsyncThunk(
  "fleetmaster/add-single-customer-child",
  async (data, thunkAPI) => {
    try {
      const response = await client.post(`customer/add/child`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      console.log({ response });

      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      // You can customize the error handling here
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

// fleet master slice
const laneMasterSlice = createSlice({
  name: "laneMaster",

  initialState: initialState,

  reducers: {
    clearDriverMasterState: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },

  extraReducers: (builder) => {
    //
    builder.addCase(fetchAllContractorsAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllContractorsAsync.fulfilled, (state, action) => {
      console.log({ ful: action.payload });
      state.isLoading = false;
      state.contractors = action.payload;
    });
    builder.addCase(fetchAllContractorsAsync.rejected, (state, action) => {
      state.isLoading = false;
    });

    //
    builder.addCase(listLaneMasterAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(listLaneMasterAsync.fulfilled, (state, action) => {
      console.log({ ful: action.payload });
      state.isLoading = false;
      state.dataList = action.payload;
    });
    builder.addCase(listLaneMasterAsync.rejected, (state, action) => {
      state.isLoading = false;
    });

    //
    builder.addCase(getAllVendorAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllVendorAsync.fulfilled, (state, action) => {
      console.log({ ful: action.payload });
      state.isLoading = false;
      state.allVendors = action.payload;
    });
    builder.addCase(getAllVendorAsync.rejected, (state, action) => {
      state.isLoading = false;
    });

    //
    builder.addCase(getAllLaneAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllLaneAsync.fulfilled, (state, action) => {
      console.log({ ful: action.payload });
      state.isLoading = false;
      state.allLanes = action.payload;
    });
    builder.addCase(getAllLaneAsync.rejected, (state, action) => {
      state.isLoading = false;
    });

    //
    builder.addCase(fetchSingleCustomerMasterAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleCustomerMasterAsync.fulfilled, (state, action) => {
      console.log({ ful: action.payload });
      state.isLoading = false;
      state.singleCustomerMaster = action.payload;
    });
    builder.addCase(fetchSingleCustomerMasterAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { clearDriverMasterState } = laneMasterSlice.actions;

const laneMasterReducer = laneMasterSlice.reducer;
export default laneMasterReducer;
