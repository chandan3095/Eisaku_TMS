import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addFleetApiCall,
    getDropdownDataApiCall,
    listFleetApiCall,
    updateFleetApiCall,
} from "../../Api/api";
import client from "../../Api/client";

// initial state
const initialState = {
    dataList: [],
    singleFleetMaster: null,

    tonnage: [],
    dimension: [],
    make: [],
    vehicleCategory: [],

    singleFleetTyres: [],
    singleFleetServiceRecords: [],
    singleFleetMonthlyBudget: [],

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
            thunkAPI.rejectWithValue(error?.response?.data);
            throw error?.response?.data;
        }
    }
);

// add fleet
export const addFleetAsync = createAsyncThunk(
    "fleetmaster/add-fleet",
    async (data, thunkAPI) => {
        try {
            console.log(data);
            const response = await addFleetApiCall(data);
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
export const updateFleetAsync = createAsyncThunk(
    "fleetmaster/update-fleet",
    async (data, thunkAPI) => {
        try {
            console.log(data);
            const response = await updateFleetApiCall(data);
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
export const listFleetAsync = createAsyncThunk(
    "fleetmaster/list-fleet",
    async (data, thunkAPI) => {
        try {
            console.log(data);
            const response = await listFleetApiCall();
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
export const fetchSingleFleetAsync = createAsyncThunk(
    "fleetmaster/fetch-single-fleet",
    async (id, thunkAPI) => {
        try {
            const response = await client.get(
                `fleet/fetch/${id}?&model_id=3&action_id=3`,
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

// fetch single fleet child data
export const fetchSingleFleetChildAsync = createAsyncThunk(
    "fleetmaster/fetch-single-fleet-child",
    async ({ id, tableName }, thunkAPI) => {
        try {
            const response = await client.get(
                `fleet/fetch/child/${id}?&table_name=${tableName}&model_id=3&action_id=3`,
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

// fetch single fleet child data
export const updateSingleFleetChildAsync = createAsyncThunk(
    "fleetmaster/update-single-fleet-child",
    async (data, thunkAPI) => {
        try {
            const response = await client.post(`fleet/update/child`, data, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.getItem("token")
                    )}`,
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
export const addSingleFleetChildAsync = createAsyncThunk(
    "fleetmaster/add-single-fleet-child",
    async (data, thunkAPI) => {
        try {
            const response = await client.post(`fleet/add/child`, data, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.getItem("token")
                    )}`,
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
        builder.addCase(
            getFleetMasterDropdownDataAsync.pending,
            (state, action) => {
                state.isLoading = true;
            }
        );
        builder.addCase(
            getFleetMasterDropdownDataAsync.fulfilled,
            (state, action) => {
                console.log({ ful: action.payload });
                state.isLoading = false;
                state.dimension = action.payload?.dimension;
                state.make = action.payload?.make;
                state.tonnage = action.payload?.tonnage;
                state.vehicleCategory = action.payload?.vehicle_category;
            }
        );
        builder.addCase(
            getFleetMasterDropdownDataAsync.rejected,
            (state, action) => {
                state.isLoading = false;
            }
        );

        //
        builder.addCase(listFleetAsync.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(listFleetAsync.fulfilled, (state, action) => {
            console.log({ ful: action.payload });
            state.isLoading = false;
            state.dataList = action.payload;
        });
        builder.addCase(listFleetAsync.rejected, (state, action) => {
            state.isLoading = false;
        });

        //
        builder.addCase(fetchSingleFleetAsync.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchSingleFleetAsync.fulfilled, (state, action) => {
            console.log({ ful: action.payload });
            state.isLoading = false;
            state.singleFleetMaster = action.payload;
        });
        builder.addCase(fetchSingleFleetAsync.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export const { clearFleetMasterState } = fleetMasterSlice.actions;

const fleetMasterReducer = fleetMasterSlice.reducer;
export default fleetMasterReducer;
