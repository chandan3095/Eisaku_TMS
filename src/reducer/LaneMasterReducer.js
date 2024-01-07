import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   laneMasterList: [],
}

const laneMasterSlice = createSlice({
   name: 'LANE_MASTER_ADD',
   initialState: initialState,
   reducers: {
      addLaneMaster: (state, action) => {
         state.laneMasterList.push(action.payload)
      }
   }
})

export const { addLaneMaster } = laneMasterSlice.actions;

export default laneMasterSlice.reducer;