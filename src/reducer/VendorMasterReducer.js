import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   vendorMasterList: [],
}

const vendorMasterSlice = createSlice({
   name: 'VENDOR_MASTER_ADD',
   initialState: initialState,
   reducers: {
      addVendorMaster: (state, action) => {
         state.vendorMasterList.push(action.payload)
      }
   }
})

export const { addVendorMaster } = vendorMasterSlice.actions;

export default vendorMasterSlice.reducer;