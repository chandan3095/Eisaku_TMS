import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDropdownDataApiCall } from "../../Api/api";

// initial state
const initialState = {
    dataList: [],
    singleFleetMaster: null,

    tonnage: [],
    dimension: [],
    make: [],
    vehicleCategory: [],

    isLoading: false,
    isError: false,
    isSuccess: false,
};

// get dropdown datas
export const getFleetMasterDropdownDataAsync = createAsyncThunk(
    "fleetmaster/get-dropdown-data",
    async (data, thunkAPI) => {
        try {
            console.log(data);
            const response = await getDropdownDataApiCall();
            console.log({ response });

            if (response.data?.statusCode === 200) {
                return thunkAPI.fulfillWithValue(response.data?.res);
            } else {
                throw response;
            }
        } catch (error) {
            // You can customize the error handling here
            console.log(error);
            thunkAPI.rejectWithValue(error.response.data);
            throw error.response.data;
        }
    }
);

// fleet master slice
const fleetMasterSlice = createSlice({
    name: "fleetMaster",

    initialState: initialState,

    reducers: {
        clearFleetMasterState: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getFleetMasterDropdownDataAsync.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getFleetMasterDropdownDataAsync.fulfilled, (state, action) => {
            console.log({ ful: action.payload });
            state.isLoading = false;
            state.dimension = action.payload?.dimension;
            state.make = action.payload?.make;
            state.tonnage = action.payload?.tonnage;
            state.vehicleCategory = action.payload?.vehicle_category;
        });
        builder.addCase(getFleetMasterDropdownDataAsync.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export const { clearFleetMasterState } = fleetMasterSlice.actions;

const fleetMasterReducer = fleetMasterSlice.reducer;
export default fleetMasterReducer;
