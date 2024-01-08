import {createSlice} from '@reduxjs/toolkit'

const initialState={
      driveMasterList: [],
}
const driveMasterSlice= createSlice({
    name: 'DRIVE_MASTER_ADD',
    initialState : initialState,
    reducers: {
        addDriveMaster: (state,action)=>{
            state.driveMasterList.push(action.payload)
        },

        editDriveMaster: (state, action) => {
           state.driveMasterList= state.driveMasterList.map((item)=>{
             if (item.drivingLicense === action.payload.drivingLicense){
               return action.payload
             }
             return item
          })
       },

       deleteDriveMaster: (state, action) => {
          state.driveMasterList = state.driveMasterList.filter(item => item.drivingLicense !== action.payload.drivingLicense)
          console.log(action.payload);
          }
       }
    }
)


export const { addDriveMaster, editDriveMaster, deleteDriveMaster } = driveMasterSlice.actions;

export default driveMasterSlice.reducer;
