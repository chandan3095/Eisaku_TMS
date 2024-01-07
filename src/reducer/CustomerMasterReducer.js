import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   customerMasterList: []
}

const customerMasterSlice = createSlice({
   name: 'CUSTOMER_MASTER_ADD',
   initialState: initialState,
   reducers: {
      addCustomerMaster: (state, action) => {
         state.customerMasterList.push(action.payload)
      }
   }
})

export const { addCustomerMaster } = customerMasterSlice.actions;


export default customerMasterSlice.reducer;