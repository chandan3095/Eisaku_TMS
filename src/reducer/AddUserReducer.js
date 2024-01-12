import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userList: [],
}
const userAddSlice = createSlice({
   name: 'USER_ADD',
   initialState: initialState,
   reducers: {
      addUser: (state, action) => {
         state.data = action.payload;
         state.error = null
      },

      // editUser: (state, action) => {
      //    state.userList = state.userList.map((item) => {
      //       if (item.mobileNo === action.payload.mobileNo) {
      //          return action.payload
      //       }
      //       return item
      //    })
      // },
      
   }
}
)


export const { addUser, editUser } = userAddSlice.actions;

export default userAddSlice.reducer;