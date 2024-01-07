import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   contractorMasterList: [],
}

const contractorMasterSlice = createSlice({
   name: 'CONTRACTOR_MASTER_ADD',
   initialState: initialState,
   reducers: {
      addContractorMaster: (state, action) => {
         state.contractorMasterList.push(action.payload)
      }
   }
})

export const { addContractorMaster } = contractorMasterSlice.actions;

export default contractorMasterSlice.reducer;