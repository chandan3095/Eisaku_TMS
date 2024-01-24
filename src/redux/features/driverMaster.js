import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDriverMasterApiCall,
  addFleetApiCall,
  fetchAllContractorsApiCall,
  getDropdownDataApiCall,
  listDriverMasterApiCall,
  listFleetApiCall,
  updateDriverMasterApiCall,
  updateFleetApiCall,
} from "../../Api/api";
import client from "../../Api/client";

// initial state
const initialState = {
  dataList: [],
  singleDriverMaster: null,

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
export const addDriverMasterAsync = createAsyncThunk(
  "driverMaster/add-driver-master",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await addDriverMasterApiCall(data);
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
export const updateDriverMasterAsync = createAsyncThunk(
  "driverMaster/update-driver-master",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await updateDriverMasterApiCall(data);
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
export const listDriverMasterAsync = createAsyncThunk(
  "driverMaster/list-driver-master",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await listDriverMasterApiCall();
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

// fetch single fleet
export const fetchSingleDriveMasterAsync = createAsyncThunk(
  "driverMaster/fetch-single-fleet",
  async (id, thunkAPI) => {
    try {
      const response = await client.get(
        `driver/fetch/${id}?&model_id=4&action_id=3`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
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
const driverMasterSlice = createSlice({
  name: "driverMaster",

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
    builder.addCase(listDriverMasterAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(listDriverMasterAsync.fulfilled, (state, action) => {
      console.log({ ful: action.payload });
      state.isLoading = false;
      state.dataList = action.payload;
    });
    builder.addCase(listDriverMasterAsync.rejected, (state, action) => {
      state.isLoading = false;
    });

    //
    builder.addCase(fetchSingleDriveMasterAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleDriveMasterAsync.fulfilled, (state, action) => {
      console.log({ ful: action.payload });
      state.isLoading = false;
      state.singleDriverMaster = action.payload;
    });
    builder.addCase(fetchSingleDriveMasterAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { clearDriverMasterState } = driverMasterSlice.actions;

const driverMasterReducer = driverMasterSlice.reducer;
export default driverMasterReducer;
