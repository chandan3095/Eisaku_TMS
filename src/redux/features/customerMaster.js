import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addCustomerMasterApiCall,
    fetchAllContractorsApiCall,
    listCustomerMasterApiCall,
    updateCustomerMasterApiCall,
} from "../../Api/api";
import client from "../../Api/client";

// initial state
const initialState = {
    dataList: [],
    singleCustomerMaster: null,

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
export const addCustomerMasterAsync = createAsyncThunk(
    "customerMaster/add-customer-master",
    async ({ data, err, done }, thunkAPI) => {
        try {
            console.log(data);
            const response = await addCustomerMasterApiCall(data);
            console.log({ response });

            if (response.data?.statusCode === 200) {
                done && done();
                return thunkAPI.fulfillWithValue(response.data?.res);
            } else {
                throw response;
            }
        } catch (error) {
            // You can customize the error handling here
            err && err();
            console.log(error);
            thunkAPI.rejectWithValue(error?.response?.data);
            throw error?.response?.data;
        }
    }
);

// update fleet
export const updateCustomerMasterAsync = createAsyncThunk(
    "driverMaster/update-customer-master",
    async ({ data, err, done }, thunkAPI) => {
        try {
            console.log(data);
            const response = await updateCustomerMasterApiCall(data);
            console.log({ response });

            if (response.data?.statusCode === 200) {
                done && done();
                return thunkAPI.fulfillWithValue(response.data?.res);
            } else {
                throw response;
            }
        } catch (error) {
            // You can customize the error handling here
            err && err();
            console.log(error);
            thunkAPI.rejectWithValue(error?.response?.data);
            throw error?.response?.data;
        }
    }
);

// add fleet
export const listCustomerMasterAsync = createAsyncThunk(
    "driverMaster/list-driver-master",
    async ({ err, done }, thunkAPI) => {
        try {
            const response = await listCustomerMasterApiCall();
            console.log({ response });

            if (response.data?.statusCode === 200) {
                done && done();
                return thunkAPI.fulfillWithValue(response.data?.res);
            } else {
                throw response;
            }
        } catch (error) {
            // You can customize the error handling here
            err && err();
            console.log(error);
            thunkAPI.rejectWithValue(error?.response?.data);
            throw error?.response?.data;
        }
    }
);

// fetch single customer master
export const fetchSingleCustomerMasterAsync = createAsyncThunk(
    "driverMaster/fetch-single-customer master",
    async ({ id, err, done }, thunkAPI) => {
        try {
            const response = await client.get(
                `customer/fetch/${id}?&model_id=6&action_id=3`,
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
                done && done();
                return thunkAPI.fulfillWithValue(response.data?.res);
            } else {
                throw response;
            }
        } catch (error) {
            // You can customize the error handling here
            err && err();
            console.log(error);
            thunkAPI.rejectWithValue(error?.response?.data);
            throw error?.response?.data;
        }
    }
);

// fetch single fleet child data
export const updateSingleCustomerChildAsync = createAsyncThunk(
    "fleetmaster/update-single-customer-child",
    async ({ data, err, done }, thunkAPI) => {
        try {
            const response = await client.post(`customer/update/child`, data, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                },
            });
            console.log({ response });

            if (response.data?.statusCode === 200) {
                done && done();
                return thunkAPI.fulfillWithValue(response.data?.res);
            } else {
                throw response;
            }
        } catch (error) {
            // You can customize the error handling here
            err && err();
            console.log(error);
            thunkAPI.rejectWithValue(error?.response?.data);
            throw error?.response?.data;
        }
    }
);

// fetch single fleet child data
export const addSingleCustomerChildAsync = createAsyncThunk(
    "fleetmaster/add-single-customer-child",
    async ({ data, err, done }, thunkAPI) => {
        try {
            const response = await client.post(`customer/add/child`, data, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                },
            });
            console.log({ response });

            if (response.data?.statusCode === 200) {
                done && done();
                return thunkAPI.fulfillWithValue(response.data?.res);
            } else {
                throw response;
            }
        } catch (error) {
            // You can customize the error handling here
            err && err();
            console.log(error);
            thunkAPI.rejectWithValue(error?.response?.data);
            throw error?.response?.data;
        }
    }
);

export const fetchChildTableDataAsync = createAsyncThunk(
    "fetch-child-table",
    async ({ id, tableName, err, done }, thunkAPI) => {
        try {
            const response = await client.get(
                `customer/fetch/child/${id}?&table_name=${tableName}&model_id=3&action_id=3`,
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
                done && done(response?.data);
                return thunkAPI.fulfillWithValue(response.data?.res);
            } else {
                throw response;
            }
        } catch (error) {
            // You can customize the error handling here
            err && err();
            console.log(error);
            thunkAPI.rejectWithValue(error?.response?.data);
            throw error?.response?.data;
        }
    }
);

// fleet master slice
const customerMasterSlice = createSlice({
    name: "customerMaster",

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
        builder.addCase(listCustomerMasterAsync.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(listCustomerMasterAsync.fulfilled, (state, action) => {
            console.log({ ful: action.payload });
            state.isLoading = false;
            state.dataList = action.payload;
        });
        builder.addCase(listCustomerMasterAsync.rejected, (state, action) => {
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

export const { clearDriverMasterState } = customerMasterSlice.actions;

const customerMasterReducer = customerMasterSlice.reducer;
export default customerMasterReducer;
