// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleAdduserApiCall } from "../../Api/api";

// Define an initial state for the slice
const initialState = {
    user: null,
    loading: false,
    error: null,
};

// Create an async thunk for the login action
export const addUserAsync = createAsyncThunk("auth/add/add-user", async (data) => {
    try {
        console.log(data);
        const response = await handleAdduserApiCall(data);
        console.log({ response });
        return response.data;
    } catch (error) {
        // You can customize the error handling here
        console.log(error);
        throw error.response.data;
    }
});

// Create a slice of the Redux store
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // You can define additional synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUserAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                console.log(action.payload);
            })
            .addCase(addUserAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // error message from the rejectWithValue call
            });
    },
});

// Export the reducer
export default authSlice.reducer;

// const a = {
//     vehicle_no: "hgfhg",
//     chasis_no: "jhjhj",
//     engine_no: "vnmjmh",
//     vehicle_owner_name: "fghg",
//     dimension_id: 1,
//     fastag_bank_name: "345vfbfgb",
//     vehicle_category_id: 1,
//     tonnage_id: 1,
//     make_id: 1,
//     model: "01,2024",
//     registration_certificate: "C:/Users/sahil/OneDrive/Pictures/Capture.png",
//     insurance_expiry_date: "2024-02-02(yyyy-mm-dd)",
//     insurance_amount: "11.100.12",
//     insurance_certificate: "C:/Users/sahil/OneDrive/Pictures/Capture.png",
//     fitness_expiry_date: "2024-02-02",
//     fitness_amount: 10.1,
//     local_permit_expiry_date: "2024-02-02",
//     local_permit_amount: "22.20",
//     local_permit_document: "C:/Users/sahil/OneDrive/Pictures/Capture.png",
//     national_permit_expiry_date: "2024-02-02",
//     national_permit_amount: "77.78",
//     national_permit_document: "C:/Users/sahil/OneDrive/Pictures/Capture.png",
//     puc_expiry_date: "2024-02-02",
//     puc_amount: "44.44",
//     puc_document: "puc_document:C:/Users/sahil/OneDrive/Pictures/Capture.png",
//     mv_tax_expiry_date: "2024-02-02",
//     mv_tax_amount: "22.67",
//     mv_tax_document: "C:/Users/sahil/OneDrive/Pictures/Capture.png",
//     gps_provider_name: "dgfdfd",
//     gps_amount: "45.78",
//     fabricator_name: "sdfdd",
//     fabricator_location: "sdsfeg",
//     emi_start_date: "2024-02-02",
//     emi_end_date: "2024-05-02",
//     emi_amount: "89.98",
//     emi_certificate: "C:/Users/sahil/OneDrive/Pictures/Capture.png",
//     financed_by: "gshdusfij",
//     tyre_type_id: [1, 2],
//     odometer_reading: [11, 22],
//     tyre_change_date: ["2024-02-02", "2024-02-03"],
//     tyre_amount: [33, 44],
//     tyre_station_name: ["test1", "test2"],
//     bill_upload_along_with_warranty_status:
//         "C:/Users/sahil/OneDrive/Pictures/Capture.png",
//     service_record_odometer_reading: [77, 88],
//     service_date: ["2024-02-02", "2024-02-03"],
//     service_amount: [99, 11],
//     service_station_name: ["name1", "name2"],
//     service_bill_upload: "C:/Users/sahil/OneDrive/Pictures/Capture.png",
//     monthly_maintenance_budget_amount: [44, 77.88],
//     to_date: ["2024-02-02", "2024-02-03"],
//     from_date: ["2024-02-02", "2024-02-03"],
//     model_id: 3,
//     action_id: 1,
// };
