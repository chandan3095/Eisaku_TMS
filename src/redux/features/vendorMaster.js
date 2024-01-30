import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addVendorMasterApiCall,
  contactPersonDetailsApiCall,
  getAllLaneApiCall,
  handleLocationMasterList,
  laneMasterDetailsApiCall,
  listVendorMasterApiCall,
  singleVendorMasterApiCall,
  updateContactApi,
} from "../../Api/api";

// initial state
const initialState = {
  dataList: [],
  laneData: [],
  locationData: [],
  contactPersonData: [],
  laneMasterData: [],
  singleVendorMaster: {},
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

export const listVendorMasterAsync = createAsyncThunk(
  "vendorMaster/fetchVendorList",
  async (data, thunkAPI) => {
    try {
      const response = await listVendorMasterApiCall();
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

export const fetchContactPersonDetailsAsync = createAsyncThunk(
  "vendorMaster/fetchContactPersonDetails",
  async (data, thunkAPI) => {
    try {
      const response = await contactPersonDetailsApiCall(data);
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

export const fetchSingleVendorMasterAsync = createAsyncThunk(
  "vendorMaster/singleVendor",
  async (data, thunkAPI) => {
    try {
      const response = await singleVendorMasterApiCall(data);
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

export const fetchLaneMasterDetailsAsync = createAsyncThunk(
  "vendorMaster/fetchLaneMasterDetails",
  async (data, thunkAPI) => {
    try {
      const response = await laneMasterDetailsApiCall(data);
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

export const updateContactAsync = createAsyncThunk(
  "vendorMaster/updateContact",
  async (data, thunkAPI) => {
    try {
      const response = await updateContactApi(data);
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
      state.isError = action.payload;
      state.isLoading = false;
    });

    // List Vendor Master
    builder.addCase(listVendorMasterAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(listVendorMasterAsync.fulfilled, (state, action) => {
      state.dataList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(listVendorMasterAsync.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    });

    // Contact person
    builder.addCase(fetchContactPersonDetailsAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchContactPersonDetailsAsync.fulfilled,
      (state, action) => {
        state.contactPersonData = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      fetchContactPersonDetailsAsync.rejected,
      (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      }
    );

    // Lane master data
    builder.addCase(fetchLaneMasterDetailsAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLaneMasterDetailsAsync.fulfilled, (state, action) => {
      state.laneMasterData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchLaneMasterDetailsAsync.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    });

    // single Vendor master
    builder.addCase(fetchSingleVendorMasterAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleVendorMasterAsync.fulfilled, (state, action) => {
      state.singleVendorMaster = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSingleVendorMasterAsync.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    });
  },
});

export const { clearVendorMaster } = vendorMasterSlice.actions;
const vendorMasterReducer = vendorMasterSlice.reducer;
export default vendorMasterReducer;
