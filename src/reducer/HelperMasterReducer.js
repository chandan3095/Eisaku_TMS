import { createSlice } from '@reduxjs/toolkit'


const initialState={
   helperMasterList: [],
}

const helperMasterSlice = createSlice({
   name: 'HELPER_MASTER_ADD',
   initialState: initialState,
   reducers: {
      addhelperMaster: (state, action) => {
         state.helperMasterList.push(action.payload)
      }
   }
})

export const { addhelperMaster } = helperMasterSlice.actions;

export default helperMasterSlice.reducer;